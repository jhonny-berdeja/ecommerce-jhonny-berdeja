import { ResponseFileDto } from './dto/response.file.dto';
import { FileEntity } from './file.entity';
import { ResponseFilesDto } from './dto/response.files.dto';
import { UpdateProductDto } from '../products/dto/update.product.dto';
export declare class FilesMapper {
    mapFileEntityToResponseFileDto(file: FileEntity): ResponseFileDto;
    mapFileToFileEntity({ originalname, mimetype, buffer }: {
        originalname: any;
        mimetype: any;
        buffer: any;
    }): FileEntity;
    mapToResponseFilesDto(files: ResponseFileDto[]): ResponseFilesDto;
    buildUpdateProductDto(url: string): UpdateProductDto;
}
