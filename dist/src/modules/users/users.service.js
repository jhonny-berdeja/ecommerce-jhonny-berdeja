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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const users_repository_1 = require("./users.repository");
const user_mapper_1 = require("./user.mapper");
const response_message_user_dto_1 = require("./dto/response.message.user.dto");
let UsersService = class UsersService {
    usersRespository;
    userMapper;
    constructor(usersRespository, userMapper) {
        this.usersRespository = usersRespository;
        this.userMapper = userMapper;
    }
    async getUsers() {
        const users = await this.usersRespository.getUsers();
        return this.userMapper.mapToResponseUsersDto(users);
    }
    async getUserById(id) {
        const user = await this.usersRespository.getUserById(id);
        return this.userMapper.mapToResponseUserDto(user);
    }
    async getUserByEmail(email) {
        return await this.usersRespository.getUserByEmail(email);
    }
    async getUserByPage(page, limit) {
        const users = await this.usersRespository.getUserByPage(page, limit);
        return this.userMapper.mapToResponseUsersDto(users);
    }
    async addUser(userDto) {
        const userEntity = this.userMapper.mapCreateUserDtoToUserEntity(userDto);
        const userEntityAdded = await this.usersRespository.addUser(userEntity);
        return this.userMapper.mapToResponseUserDto(userEntityAdded);
    }
    async updateUser(id, userDto) {
        const userEntity = this.userMapper.mapUpdateUserDtoToUserEntity(userDto);
        const userUpdated = await this.usersRespository.updateUser(id, userEntity);
        const responseMessageDto = new response_message_user_dto_1.ResponseMessageUserDto();
        responseMessageDto.id = userUpdated.id;
        return responseMessageDto;
    }
    async deleteUser(id) {
        const userDeleted = await this.usersRespository.deleteUser(id);
        const responseMessageDto = new response_message_user_dto_1.ResponseMessageUserDto();
        responseMessageDto.id = userDeleted.id;
        return responseMessageDto;
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_repository_1.UsersRepository,
        user_mapper_1.UserMapper])
], UsersService);
//# sourceMappingURL=users.service.js.map