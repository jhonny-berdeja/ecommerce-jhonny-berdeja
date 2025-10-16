import { FilesService } from './files.service';
export declare class FileController {
    private filesService;
    constructor(filesService: FilesService);
    getFiles(): Promise<import("./dto/response.files.dto").ResponseFilesDto>;
    uploadFile(file: File): Promise<import("./dto/response.file.dto").ResponseFileDto>;
    updateImageInProduct(file: File, idProduct: string): Promise<import("../products/dto/response.message.product.dto").ResponseMessageProductDto>;
}
