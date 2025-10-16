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
exports.UsersRepository = void 0;
const common_1 = require("@nestjs/common");
const user_entity_1 = require("./user.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let UsersRepository = class UsersRepository {
    usersRepository;
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async getUsers() {
        return await this.usersRepository.find();
    }
    async getUserById(id) {
        const user = await this.usersRepository.findOneBy({ id });
        if (!user)
            throw new common_1.NotFoundException(`El usuario con id ${id} no existe`);
        return user;
    }
    async getUserByEmail(email) {
        const user = await this.usersRepository.findOneBy({ email });
        if (!user)
            throw new Error(`El usuario con email ${email} no existe`);
        return user;
    }
    async getUserByPage(page, limit) {
        const skip = (page - 1) * limit;
        const [users, total] = await this.usersRepository.findAndCount({
            skip: skip,
            take: limit,
        });
        console.log(`Página ${page} - Total de usuarios: ${total}`);
        return users;
    }
    async addUser(user) {
        const existUser = await this.usersRepository.findOneBy({
            email: user.email,
        });
        if (existUser) {
            throw new common_1.BadRequestException(`El email ${user.email} ya está registrado`);
        }
        const newUser = this.usersRepository.create(user);
        return this.usersRepository.save(newUser);
    }
    async updateUser(id, user) {
        const userExist = await this.usersRepository.findOneBy({ id });
        if (!userExist)
            throw new Error(`No existe un usuario con el id ${id}`);
        const userUpdate = {
            ...user,
            id: userExist.id,
        };
        return this.usersRepository.save(userUpdate);
    }
    async deleteUser(id) {
        const userExist = await this.usersRepository.findOneBy({ id });
        if (!userExist) {
            throw new common_1.NotFoundException(`No existe un usuario con el id ${id}`);
        }
        const userDeleted = { ...userExist };
        await this.usersRepository.remove(userExist);
        return userDeleted;
    }
};
exports.UsersRepository = UsersRepository;
exports.UsersRepository = UsersRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsersRepository);
//# sourceMappingURL=users.repository.js.map