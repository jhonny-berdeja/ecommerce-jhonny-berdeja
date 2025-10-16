import { Module } from '@nestjs/common';
import { CloudinaryProvider } from './cloudinary.provider';
import { CloudinaryService } from './cloudinary.service';
import { ClaudinaryController } from './cloudinary.controller';

@Module({
  imports: [],
  controllers: [ClaudinaryController],
  providers: [CloudinaryProvider, CloudinaryService],
  exports: [CloudinaryService, CloudinaryProvider],
})
export class CloudinaryModule {}
