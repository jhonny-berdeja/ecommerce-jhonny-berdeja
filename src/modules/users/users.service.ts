import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { CreateUserDto } from './dto/create.user.dto';
import { UserMapper } from './user.mapper';
import { UpdateUserDto } from './dto/update.user.dto';
import { ResponseUserDto } from './dto/response.user.dto';
import { UserEntity } from './user.entity';
import { ResponseUsersDto } from './dto/response.users.dto';
import { ResponseMessageUserDto } from './dto/response.message.user.dto';

@Injectable()
export class UsersService {
  constructor(
    private usersRespository: UsersRepository,
    private userMapper: UserMapper,
  ) {}

  async getUsers(): Promise<ResponseUsersDto> {
    const users = await this.usersRespository.getUsers();
    return this.userMapper.mapToResponseUsersDto(users);
  }

  async getUserById(id: string): Promise<ResponseUserDto> {
    const user = await this.usersRespository.getUserById(id);
    return this.userMapper.mapToResponseUserDto(user);
  }

  async getUserByEmail(email: string): Promise<UserEntity> {
    return await this.usersRespository.getUserByEmail(email);
  }

  async getUserByPage(page: number, limit: number): Promise<ResponseUsersDto> {
    const users = await this.usersRespository.getUserByPage(page, limit);
    return this.userMapper.mapToResponseUsersDto(users);
  }

  async addUser(userDto: CreateUserDto): Promise<ResponseUserDto> {
    const userEntity = this.userMapper.mapCreateUserDtoToUserEntity(userDto);
    const userEntityAdded = await this.usersRespository.addUser(userEntity);
    return this.userMapper.mapToResponseUserDto(userEntityAdded);
  }

  async updateUser(
    id: string,
    userDto: UpdateUserDto,
  ): Promise<ResponseMessageUserDto> {
    const userEntity = this.userMapper.mapUpdateUserDtoToUserEntity(userDto);
    const userUpdated = await this.usersRespository.updateUser(id, userEntity);
    const responseMessageDto = new ResponseMessageUserDto();
    responseMessageDto.id = userUpdated.id;
    return responseMessageDto;
  }

  async deleteUser(id: string): Promise<ResponseMessageUserDto> {
    const userDeleted = await this.usersRespository.deleteUser(id);
    const responseMessageDto = new ResponseMessageUserDto();
    responseMessageDto.id = userDeleted.id;
    return responseMessageDto;
  }
}
