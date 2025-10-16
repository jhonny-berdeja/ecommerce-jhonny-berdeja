"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMapper = void 0;
const create_user_dto_1 = require("./dto/create.user.dto");
const response_user_dto_1 = require("./dto/response.user.dto");
const response_users_dto_1 = require("./dto/response.users.dto");
const user_entity_1 = require("./user.entity");
function mapToCreateUserDto(user) {
    const createUserDto = new create_user_dto_1.CreateUserDto();
    createUserDto.email = user.email;
    createUserDto.name = user.name;
    createUserDto.address = user.address;
    createUserDto.phone = user.phone;
    createUserDto.country = user.country;
    createUserDto.city = user.city;
    return createUserDto;
}
function mapCreateUserDtoToUserEntity(createUserDto) {
    const userEntity = new user_entity_1.UserEntity();
    userEntity.email = createUserDto.email;
    userEntity.name = createUserDto.name;
    userEntity.password = createUserDto.password;
    userEntity.address = createUserDto.address;
    userEntity.country = createUserDto.country;
    userEntity.city = createUserDto.city;
    userEntity.phone = createUserDto.phone;
    userEntity.roles = createUserDto.roles;
    return userEntity;
}
function mapUpdateUserDtoToUserEntity(updatteUserDto) {
    const userEntity = new user_entity_1.UserEntity();
    if (updatteUserDto.email)
        userEntity.email = updatteUserDto.email;
    if (updatteUserDto.name)
        userEntity.name = updatteUserDto.name;
    if (updatteUserDto.password)
        userEntity.password = updatteUserDto.password;
    if (updatteUserDto.address)
        userEntity.address = updatteUserDto.address;
    if (updatteUserDto.country)
        userEntity.country = updatteUserDto.country;
    if (updatteUserDto.city)
        userEntity.city = updatteUserDto.city;
    if (updatteUserDto.phone)
        userEntity.phone = updatteUserDto.phone;
    return userEntity;
}
function mapToResponseUserDto(user) {
    const responseUserDto = new response_user_dto_1.ResponseUserDto();
    responseUserDto.id = user.id;
    responseUserDto.email = user.email;
    responseUserDto.name = user.name;
    responseUserDto.address = user.address;
    responseUserDto.phone = user.phone;
    responseUserDto.country = user.country;
    responseUserDto.city = user.city;
    return responseUserDto;
}
function mapToResponseUsersDto(users) {
    const responseUsers = users.map((user) => mapToResponseUserDto(user));
    const responseUsersDto = new response_users_dto_1.ResponseUsersDto();
    responseUsersDto.users = responseUsers;
    return responseUsersDto;
}
class UserMapper {
    mapToCreateUserDto(user) {
        return mapToCreateUserDto(user);
    }
    mapCreateUserDtoToUserEntity(user) {
        return mapCreateUserDtoToUserEntity(user);
    }
    mapUpdateUserDtoToUserEntity(user) {
        return mapUpdateUserDtoToUserEntity(user);
    }
    mapToResponseUserDto(user) {
        return mapToResponseUserDto(user);
    }
    mapToResponseUsersDto(users) {
        return mapToResponseUsersDto(users);
    }
}
exports.UserMapper = UserMapper;
//# sourceMappingURL=user.mapper.js.map