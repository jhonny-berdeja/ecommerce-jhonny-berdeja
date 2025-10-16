import {
  Controller,
  FileTypeValidator,
  Get,
  HttpStatus,
  Injectable,
  MaxFileSizeValidator,
  Param,
  ParseFilePipe,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FilesService } from './files.service';
import { Roles } from 'src/decorators/roles.decorator';
import { Role } from 'src/modules/auth/roles.enum';
import { AuthGuard } from 'src/guards/auth.guard';
import { RolesGuard } from 'src/guards/roles.guard';
import {
  ApiBearerAuth,
  ApiBody,
  ApiConsumes,
  ApiOperation,
} from '@nestjs/swagger';

@Injectable()
@Controller('files')
export class FileController {
  constructor(private filesService: FilesService) {}

  @ApiOperation({
    summary: 'Obtener todos los archivos',
    description:
      'Devuelve una lista de todos los archivos cargados. Accesible para admins y usuarios autenticados',
  })
  @ApiBearerAuth()
  @Get()
  @Roles(Role.ADMIN, Role.USER)
  @UseGuards(AuthGuard, RolesGuard)
  getFiles() {
    return this.filesService.getFiles();
  }

  @ApiOperation({
    summary: 'Subir un archivo',
    description:
      'Carga un archivo de imagen. Solo administradores. Soporta JPG, PNG y WebP',
  })
  @ApiBearerAuth()
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'Carga de un archivo único',
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
          description: 'El archivo a subir (image/(jpeg|png|webp))',
        },
      },
      required: ['file'],
    },
  })
  @Post('upload')
  @Roles(Role.ADMIN)
  @UseGuards(AuthGuard, RolesGuard)
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: File) {
    return this.filesService.addFile(file);
  }

  @ApiOperation({
    summary: 'Actualizar imagen de producto',
    description:
      'Carga una imagen para un producto específico, reemplazando la anterior. Solo administradores. Máximo 200KB. Soporta JPG, PNG y WebP',
  })
  @ApiBearerAuth()
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'Carga de un archivo único',
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
          description: 'El archivo a subir (image/(jpeg|png|webp))',
        },
      },
      required: ['file'],
    },
  })
  @Post('uploadImage/:idProduct')
  @Roles(Role.ADMIN)
  @UseGuards(AuthGuard, RolesGuard)
  @UseInterceptors(FileInterceptor('file'))
  updateImageInProduct(
    @UploadedFile(
      new ParseFilePipe({
        errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
        fileIsRequired: true,
        validators: [
          new MaxFileSizeValidator({
            maxSize: 200 * 1024,
            message: 'El tamaño del archivo no debe exceder 200KB.',
          }),
          new FileTypeValidator({
            fileType: 'image/(jpeg|png|webp)',
          }),
        ],
      }),
    )
    file: File,
    @Param('idProduct') idProduct: string,
  ) {
    return this.filesService.updateImageInProduct(idProduct, file);
  }
}
