"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilesRepository = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const file_entity_1 = require("./file.entity");
const typeorm_2 = require("typeorm");
const common_1 = require("@nestjs/common");
let FilesRepository = class FilesRepository {
    filesRepository;
    constructor(filesRepository) {
        this.filesRepository = filesRepository;
    }
    async getFiles() {
        return await this.filesRepository.find();
    }
    async addFile(file) {
        const fileExist = await this.filesRepository.findOneBy({ name: file.name });
        if (fileExist) {
            throw new common_1.BadRequestException(`Ya existe un archivo con el nombre ${file.name}`);
        }
        return this.filesRepository.save(file);
    }
};
exports.FilesRepository = FilesRepository;
exports.FilesRepository = FilesRepository = __decorate([
    __param(0, (0, typeorm_1.InjectRepository)(file_entity_1.FileEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], FilesRepository);
//# sourceMappingURL=files.repository.js.map