import { UserService } from './user.service';
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserModel } from './user.model';
import { UserCreateInput } from './input/UserCreateInput';
import { AuthGuard } from '../auth/auth.guard';
import { Request, UseGuards } from '@nestjs/common';

@Resolver((of) => UserModel)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @UseGuards(AuthGuard)
  @Query((returns) => [UserModel])
  async users() {
    return this.userService.getAll();
  }

  @UseGuards(AuthGuard)
  @Query((returns) => UserModel)
  async user(@Args('id') id: number) {
    return this.userService.findById(id);
  }

  @UseGuards(AuthGuard)
  @Query((returns) => UserModel)
  async profile(@Context('req') req: any) {
    return this.userService.findById(req.user.id);
  }

  @Mutation((returns) => UserModel)
  async createUser(@Args('input') input: UserCreateInput) {
    return this.userService.create(input);
  }

  @Mutation((returns) => UserModel)
  async delete(@Args('id') id: number) {
    return this.userService.delete(id);
  }
}
