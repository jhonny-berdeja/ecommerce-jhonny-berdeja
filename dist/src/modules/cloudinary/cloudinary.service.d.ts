import { UploadApiResponse, v2 } from 'cloudinary';
export declare class CloudinaryService {
    private cloudinary;
    constructor(cloudinary: typeof v2);
    uploadFile({ mimetype, buffer }: {
        mimetype: any;
        buffer: any;
    }): Promise<UploadApiResponse>;
}
