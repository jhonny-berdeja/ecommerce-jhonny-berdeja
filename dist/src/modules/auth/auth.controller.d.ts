import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/modules/users/dto/create.user.dto';
import { RequestSignInDto } from './dto/request.signin.dto';
import { RequestUpdatePasswordDto } from './dto/request.update.password.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signUp(user: CreateUserDto): Promise<import("../users/dto/response.user.dto").ResponseUserDto>;
    signIn(signinDto: RequestSignInDto): Promise<import("./dto/response.token.dto").ResponseTokenDto>;
    updatePassword(updatePasswordDto: RequestUpdatePasswordDto): Promise<import("./dto/response.update.password.dto").ResponseUpdatePasswordDto>;
}
