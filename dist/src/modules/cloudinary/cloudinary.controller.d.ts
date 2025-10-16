import { File } from 'multer';
import { CloudinaryService } from './cloudinary.service';
export declare class ClaudinaryController {
    private cloudinaryService;
    constructor(cloudinaryService: CloudinaryService);
    uploadFile(file: File): Promise<import("cloudinary").UploadApiResponse>;
}
