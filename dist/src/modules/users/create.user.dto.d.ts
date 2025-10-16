import { Role } from 'src/modules/auth/roles.enum';
export declare class CreateUserDto {
    email: string;
    name: string;
    password: string;
    address: string;
    phone: number;
    country: string;
    city: string;
    roles: Role[];
}
