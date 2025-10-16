import { Body, Controller, Post, Put, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/modules/users/dto/create.user.dto';
import { RequestSignInDto } from './dto/request.signin.dto';
import { RequestUpdatePasswordDto } from './dto/request.update.password.dto';
import { Roles } from 'src/decorators/roles.decorator';
import { AuthGuard } from 'src/guards/auth.guard';
import { RolesGuard } from 'src/guards/roles.guard';
import { Role } from './roles.enum';
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({
    summary: 'Registrar un nuevo usuario',
    description:
      'Crea una nueva cuenta de usuario con email, contraseña y datos personales',
  })
  @Post('signup')
  signUp(@Body() user: CreateUserDto) {
    return this.authService.signUp(user);
  }

  @ApiOperation({
    summary: 'Iniciar sesión',
    description:
      'Autentica un usuario con email y contraseña, devolviendo un token JWT',
  })
  @Post('signin')
  signIn(@Body() signinDto: RequestSignInDto) {
    return this.authService.signIn(signinDto.email, signinDto.password);
  }

  @ApiOperation({
    summary: 'Actualizar contraseña de un usuario',
    description:
      'Solo administradores pueden actualizar contraseñas. Requiere token JWT válido',
  })
  @ApiBearerAuth()
  @Put('update-password')
  @Roles(Role.ADMIN)
  @UseGuards(AuthGuard, RolesGuard)
  updatePassword(@Body() updatePasswordDto: RequestUpdatePasswordDto) {
    return this.authService.updatePassword(
      updatePasswordDto.email,
      updatePasswordDto.password,
    );
  }
}
