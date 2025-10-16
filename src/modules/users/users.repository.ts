import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UserEntity } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  async getUsers(): Promise<UserEntity[]> {
    return await this.usersRepository.find();
  }

  async getUserById(id: string): Promise<UserEntity> {
    const user = await this.usersRepository.findOneBy({ id });
    if (!user) throw new NotFoundException(`El usuario con id ${id} no existe`);
    return user;
  }

  async getUserByEmail(email: string): Promise<UserEntity> {
    const user = await this.usersRepository.findOneBy({ email });
    if (!user) throw new Error(`El usuario con email ${email} no existe`);
    return user;
  }

  async getUserByPage(page: number, limit: number): Promise<UserEntity[]> {
    const skip = (page - 1) * limit;
    const [users, total] = await this.usersRepository.findAndCount({
      skip: skip,
      take: limit,
    });
    console.log(`Página ${page} - Total de usuarios: ${total}`);
    return users;
  }

  async addUser(user: UserEntity): Promise<UserEntity> {
    const existUser = await this.usersRepository.findOneBy({
      email: user.email,
    });
    if (existUser) {
      throw new BadRequestException(
        `El email ${user.email} ya está registrado`,
      );
    }
    const newUser = this.usersRepository.create(user);
    return this.usersRepository.save(newUser);
  }

  async updateUser(id: string, user: UserEntity): Promise<UserEntity> {
    const userExist = await this.usersRepository.findOneBy({ id });
    if (!userExist) throw new Error(`No existe un usuario con el id ${id}`);
    const userUpdate: UserEntity = {
      ...user,
      id: userExist.id,
    };
    return this.usersRepository.save(userUpdate);
  }

  async deleteUser(id: string): Promise<UserEntity> {
    const userExist = await this.usersRepository.findOneBy({ id });
    if (!userExist) {
      throw new NotFoundException(`No existe un usuario con el id ${id}`);
    }
    const userDeleted = { ...userExist };
    await this.usersRepository.remove(userExist);
    return userDeleted;
  }
}
