import { Inject, Injectable, BadRequestException } from '@nestjs/common';
import { UploadApiResponse, v2 } from 'cloudinary';

const CLOUDINARY = 'CLOUDINARY';

@Injectable()
export class CloudinaryService {
  constructor(@Inject(CLOUDINARY) private cloudinary: typeof v2) {}

  async uploadFile({ mimetype, buffer }): Promise<UploadApiResponse> {
    const fileBuffer = buffer as Buffer;

    const fileBase64 = `data:${mimetype};base64,${fileBuffer.toString('base64')}`;

    try {
      const result: UploadApiResponse = await this.cloudinary.uploader.upload(
        fileBase64,
        {
          folder: 'ecommerce-products',
        },
      );

      return result;
    } catch (error) {
      console.error('Cloudinary Upload Error:', error);
      throw new BadRequestException('Fallo al subir el archivo a Cloudinary.');
    }
  }
}
