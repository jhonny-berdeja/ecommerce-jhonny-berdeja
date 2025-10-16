import { UsersRepository } from './users.repository';
import { CreateUserDto } from './dto/create.user.dto';
import { UserMapper } from './user.mapper';
import { UpdateUserDto } from './dto/update.user.dto';
import { ResponseUserDto } from './dto/response.user.dto';
import { UserEntity } from './user.entity';
import { ResponseUsersDto } from './dto/response.users.dto';
import { ResponseMessageUserDto } from './dto/response.message.user.dto';
export declare class UsersService {
    private usersRespository;
    private userMapper;
    constructor(usersRespository: UsersRepository, userMapper: UserMapper);
    getUsers(): Promise<ResponseUsersDto>;
    getUserById(id: string): Promise<ResponseUserDto>;
    getUserByEmail(email: string): Promise<UserEntity>;
    getUserByPage(page: number, limit: number): Promise<ResponseUsersDto>;
    addUser(userDto: CreateUserDto): Promise<ResponseUserDto>;
    updateUser(id: string, userDto: UpdateUserDto): Promise<ResponseMessageUserDto>;
    deleteUser(id: string): Promise<ResponseMessageUserDto>;
}
