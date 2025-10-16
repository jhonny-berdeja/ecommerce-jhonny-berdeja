import { InjectRepository } from '@nestjs/typeorm';
import { FileEntity } from './file.entity';
import { Repository } from 'typeorm';
import { BadRequestException } from '@nestjs/common';

export class FilesRepository {
  constructor(
    @InjectRepository(FileEntity)
    private filesRepository: Repository<FileEntity>,
  ) {}
  async getFiles(): Promise<FileEntity[]> {
    return await this.filesRepository.find();
  }
  async addFile(file: FileEntity): Promise<FileEntity> {
    const fileExist = await this.filesRepository.findOneBy({ name: file.name });
    if (fileExist) {
      throw new BadRequestException(
        `Ya existe un archivo con el nombre ${file.name}`,
      );
    }
    return this.filesRepository.save(file);
  }
}
