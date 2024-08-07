import { Module } from '@nestjs/common';
import { User } from './user.entity';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserRepository, UserService, UserResolver],
  exports: [UserService, UserRepository],
})
export class UserModule {}
