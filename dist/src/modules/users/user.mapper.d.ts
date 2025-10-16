import { CreateUserDto } from './dto/create.user.dto';
import { ResponseUserDto } from './dto/response.user.dto';
import { ResponseUsersDto } from './dto/response.users.dto';
import { UpdateUserDto } from './dto/update.user.dto';
import { UserEntity } from './user.entity';
export declare class UserMapper {
    mapToCreateUserDto(user: UserEntity): CreateUserDto;
    mapCreateUserDtoToUserEntity(user: CreateUserDto): UserEntity;
    mapUpdateUserDtoToUserEntity(user: UpdateUserDto): UserEntity;
    mapToResponseUserDto(user: UserEntity): ResponseUserDto;
    mapToResponseUsersDto(users: UserEntity[]): ResponseUsersDto;
}
