import { ResponseFileDto } from './dto/response.file.dto';
import { FileEntity } from './file.entity';
import { ResponseFilesDto } from './dto/response.files.dto';
import { UpdateProductDto } from '../products/dto/update.product.dto';

export class FilesMapper {
  mapFileEntityToResponseFileDto(file: FileEntity): ResponseFileDto {
    const fileResponseDto = new ResponseFileDto();
    fileResponseDto.id = file.id;
    fileResponseDto.name = file.name;
    fileResponseDto.mineType = file.mineType;
    fileResponseDto.data = file.data;
    return fileResponseDto;
  }

  mapFileToFileEntity({ originalname, mimetype, buffer }): FileEntity {
    const fileEntity = new FileEntity();
    fileEntity.name = originalname as string;
    fileEntity.mineType = mimetype as string;
    fileEntity.data = buffer as Buffer;
    return fileEntity;
  }

  mapToResponseFilesDto(files: ResponseFileDto[]) {
    const responseFiles = files.map((file) =>
      this.mapFileEntityToResponseFileDto(file),
    );
    const reponseFilesDto = new ResponseFilesDto();
    reponseFilesDto.responseFilesDto = responseFiles;
    return reponseFilesDto;
  }

  buildUpdateProductDto(url: string) {
    const updateProductDto = new UpdateProductDto();
    updateProductDto.imgUrl = url;
    return updateProductDto;
  }
}
