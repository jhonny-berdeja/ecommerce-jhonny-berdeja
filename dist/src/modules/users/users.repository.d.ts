import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
export declare class UsersRepository {
    private usersRepository;
    constructor(usersRepository: Repository<UserEntity>);
    getUsers(): Promise<UserEntity[]>;
    getUserById(id: string): Promise<UserEntity>;
    getUserByEmail(email: string): Promise<UserEntity>;
    getUserByPage(page: number, limit: number): Promise<UserEntity[]>;
    addUser(user: UserEntity): Promise<UserEntity>;
    updateUser(id: string, user: UserEntity): Promise<UserEntity>;
    deleteUser(id: string): Promise<UserEntity>;
}
