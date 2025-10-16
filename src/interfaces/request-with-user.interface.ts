import { Request } from 'express';
import { Role } from 'src/modules/auth/roles.enum';

export interface UserPayload {
  sub: number;
  username: string;
  roles: Role[];
}

export interface RequestWithUser extends Request {
  user: UserPayload;
}
