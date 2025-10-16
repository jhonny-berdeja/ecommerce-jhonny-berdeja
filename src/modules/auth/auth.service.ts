import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto } from 'src/modules/users/dto/create.user.dto';
import { ResponseUserDto } from 'src/modules/users/dto/response.user.dto';
import { UsersService } from 'src/modules/users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { ResponseTokenDto } from './dto/response.token.dto';
import { UserEntity } from 'src/modules/users/user.entity';
import { UpdateUserDto } from 'src/modules/users/dto/update.user.dto';
import { ResponseUpdatePasswordDto } from './dto/response.update.password.dto';

function validatePassword(isPasswordValid: boolean): void {
  if (!isPasswordValid) {
    throw new BadRequestException('Invalid password');
  }
}

function buildTokenDto(token: string): ResponseTokenDto {
  const tokenDto = new ResponseTokenDto();
  tokenDto.message = 'Generated token ok';
  tokenDto.token = token;
  return tokenDto;
}

function buildUserPyload(user: UserEntity) {
  const userPayload = {
    sub: user.id,
    id: user.id,
    email: user.email,
    roles: user.roles,
  };
  return userPayload;
}

function buildResponseUpdatePasswordDto() {
  const responseUpdatePasswordDto = new ResponseUpdatePasswordDto();
  responseUpdatePasswordDto.message = 'Password changed successfully';
  return responseUpdatePasswordDto;
}

function buildUpdateUserDto(password: string) {
  const updateUserDto = new UpdateUserDto();
  updateUserDto.password = password;
  return updateUserDto;
}

async function hashPassword(password: string): Promise<string> {
  return await bcrypt.hash(password, 10);
}

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signUp(userDto: CreateUserDto): Promise<ResponseUserDto> {
    const hashedPassword = await hashPassword(userDto.password);
    const user: CreateUserDto = { ...userDto, password: hashedPassword };
    return await this.usersService.addUser(user);
  }

  async signIn(email: string, password: string): Promise<ResponseTokenDto> {
    try {
      const user = await this.usersService.getUserByEmail(email);
      const isPasswordValid = await bcrypt.compare(password, user.password);
      validatePassword(isPasswordValid);
      const userPayload = buildUserPyload(user);
      const token = this.jwtService.sign(userPayload);
      return buildTokenDto(token);
    } catch (err) {
      console.error('Error de SignIn ', err);
      throw new UnauthorizedException('Credenciales incorrectas');
    }
  }

  async updatePassword(
    email: string,
    password: string,
  ): Promise<ResponseUpdatePasswordDto> {
    try {
      const user = await this.usersService.getUserByEmail(email);
      const hashedPassword = await hashPassword(password);
      const updateUserDto = buildUpdateUserDto(hashedPassword);
      await this.usersService.updateUser(user.id, updateUserDto);
      return buildResponseUpdatePasswordDto();
    } catch (err) {
      console.error('Error to change password ', err);
      throw new UnauthorizedException(err);
    }
  }
}
