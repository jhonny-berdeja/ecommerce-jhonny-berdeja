import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update.user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getRoles(): string;
    getUsers(): Promise<import("./dto/response.users.dto").ResponseUsersDto>;
    getUserByPage(query: {
        page?: string;
        limit?: string;
    }): Promise<import("./dto/response.users.dto").ResponseUsersDto>;
    getUserById(id: string): Promise<import("./dto/response.user.dto").ResponseUserDto>;
    updateUser(id: string, user: UpdateUserDto): Promise<import("./dto/response.message.user.dto").ResponseMessageUserDto>;
    deleteUser(id: string): Promise<import("./dto/response.message.user.dto").ResponseMessageUserDto>;
}
