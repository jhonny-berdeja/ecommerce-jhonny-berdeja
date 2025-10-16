import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';
import {
  RequestWithUser,
  UserPayload,
} from 'src/interfaces/request-with-user.interface';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    try {
      const request: RequestWithUser = context.switchToHttp().getRequest();
      const authorization = request.headers['authorization'];
      const token = authorization?.split(' ')[1];
      if (!token) {
        throw new UnauthorizedException('Bearer token not foud');
      }
      const secret = process.env.JWT_SECRET as string;
      const payload: UserPayload = this.jwtService.verify(token, { secret });
      request.user = {
        ...payload,
      };

      return true;
    } catch (error) {
      console.error(error);
      throw new UnauthorizedException('Invalid token');
    }
  }
}
