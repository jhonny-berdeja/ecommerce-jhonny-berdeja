import { CreateUserDto } from 'src/modules/users/dto/create.user.dto';
import { ResponseUserDto } from 'src/modules/users/dto/response.user.dto';
import { UsersService } from 'src/modules/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { ResponseTokenDto } from './dto/response.token.dto';
import { ResponseUpdatePasswordDto } from './dto/response.update.password.dto';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    signUp(userDto: CreateUserDto): Promise<ResponseUserDto>;
    signIn(email: string, password: string): Promise<ResponseTokenDto>;
    updatePassword(email: string, password: string): Promise<ResponseUpdatePasswordDto>;
}
