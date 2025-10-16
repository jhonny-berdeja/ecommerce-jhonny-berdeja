import { ResponseFileDto } from './dto/response.file.dto';
import { FilesRepository } from './files.repository';
import { FilesMapper } from './file.mapper';
import { File } from 'multer';
import { CloudinaryService } from 'src/modules/cloudinary/cloudinary.service';
import { ProductsService } from 'src/modules/products/products.service';
import { ResponseFilesDto } from './dto/response.files.dto';
import { ResponseMessageProductDto } from '../products/dto/response.message.product.dto';
export declare class FilesService {
    private filesRepository;
    private filesMapprer;
    private cloudinaryService;
    private productsService;
    constructor(filesRepository: FilesRepository, filesMapprer: FilesMapper, cloudinaryService: CloudinaryService, productsService: ProductsService);
    getFiles(): Promise<ResponseFilesDto>;
    addFile(file: File): Promise<ResponseFileDto>;
    updateImageInProduct(idProduct: string, file: File): Promise<ResponseMessageProductDto>;
}
