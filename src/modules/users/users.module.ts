import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UsersRepository } from './users.repository';
import { UserMapper } from './user.mapper';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UsersController],
  providers: [UsersService, UsersRepository, UserMapper],
  exports: [
    TypeOrmModule.forFeature([UserEntity]),
    UsersService,
    UsersRepository,
    UserMapper,
  ],
})
export class UsersModule {}
