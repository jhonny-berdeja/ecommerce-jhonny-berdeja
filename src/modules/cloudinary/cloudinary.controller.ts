import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
  ParseFilePipe,
  MaxFileSizeValidator,
  FileTypeValidator,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { File } from 'multer';
import { CloudinaryService } from './cloudinary.service';
import { Role } from 'src/modules/auth/roles.enum';
import { Roles } from 'src/decorators/roles.decorator';
import { AuthGuard } from 'src/guards/auth.guard';
import { RolesGuard } from 'src/guards/roles.guard';
import {
  ApiBearerAuth,
  ApiBody,
  ApiConsumes,
  ApiOperation,
} from '@nestjs/swagger';

@Controller('cloudinary')
export class ClaudinaryController {
  constructor(private cloudinaryService: CloudinaryService) {}

  @ApiOperation({
    summary: 'Subir archivo a Cloudinary',
    description:
      'Carga una imagen a Cloudinary. Solo administradores. Soporta JPG, PNG y WebP. Máximo 200KB',
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
  uploadFile(
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
  ) {
    return this.cloudinaryService.uploadFile(file);
  }
}
