import { FileEntity } from './file.entity';
import { Repository } from 'typeorm';
export declare class FilesRepository {
    private filesRepository;
    constructor(filesRepository: Repository<FileEntity>);
    getFiles(): Promise<FileEntity[]>;
    addFile(file: FileEntity): Promise<FileEntity>;
}
