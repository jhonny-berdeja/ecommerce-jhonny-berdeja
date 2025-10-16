import { CreateUserDto } from './dto/create.user.dto';
import { ResponseUserDto } from './dto/response.user.dto';
import { ResponseUsersDto } from './dto/response.users.dto';
import { UpdateUserDto } from './dto/update.user.dto';
import { UserEntity } from './user.entity';

function mapToCreateUserDto(user: UserEntity): CreateUserDto {
  const createUserDto = new CreateUserDto();
  createUserDto.email = user.email;
  createUserDto.name = user.name;
  createUserDto.address = user.address;
  createUserDto.phone = user.phone;
  createUserDto.country = user.country;
  createUserDto.city = user.city;
  return createUserDto;
}
function mapCreateUserDtoToUserEntity(
  createUserDto: CreateUserDto,
): UserEntity {
  const userEntity = new UserEntity();
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
function mapUpdateUserDtoToUserEntity(
  updatteUserDto: UpdateUserDto,
): UserEntity {
  const userEntity = new UserEntity();
  if (updatteUserDto.email) userEntity.email = updatteUserDto.email;
  if (updatteUserDto.name) userEntity.name = updatteUserDto.name;
  if (updatteUserDto.password) userEntity.password = updatteUserDto.password;
  if (updatteUserDto.address) userEntity.address = updatteUserDto.address;
  if (updatteUserDto.country) userEntity.country = updatteUserDto.country;
  if (updatteUserDto.city) userEntity.city = updatteUserDto.city;
  if (updatteUserDto.phone) userEntity.phone = updatteUserDto.phone;
  return userEntity;
}
function mapToResponseUserDto(user: UserEntity): ResponseUserDto {
  const responseUserDto = new ResponseUserDto();
  responseUserDto.id = user.id;
  responseUserDto.email = user.email;
  responseUserDto.name = user.name;
  responseUserDto.address = user.address;
  responseUserDto.phone = user.phone;
  responseUserDto.country = user.country;
  responseUserDto.city = user.city;
  return responseUserDto;
}
function mapToResponseUsersDto(users: UserEntity[]): ResponseUsersDto {
  const responseUsers = users.map((user) => mapToResponseUserDto(user));
  const responseUsersDto = new ResponseUsersDto();
  responseUsersDto.users = responseUsers;
  return responseUsersDto;
}
export class UserMapper {
  mapToCreateUserDto(user: UserEntity): CreateUserDto {
    return mapToCreateUserDto(user);
  }
  mapCreateUserDtoToUserEntity(user: CreateUserDto): UserEntity {
    return mapCreateUserDtoToUserEntity(user);
  }
  mapUpdateUserDtoToUserEntity(user: UpdateUserDto): UserEntity {
    return mapUpdateUserDtoToUserEntity(user);
  }
  mapToResponseUserDto(user: UserEntity): ResponseUserDto {
    return mapToResponseUserDto(user);
  }
  mapToResponseUsersDto(users: UserEntity[]): ResponseUsersDto {
    return mapToResponseUsersDto(users);
  }
}
