import { UserService } from './user.service';
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserModel } from './user.model';
import { UserCreateInput } from './input/UserCreateInput';
import { AuthGuard } from '../auth/auth.guard';
import { UseGuards } from '@nestjs/common';
import { UserInput } from '../auth/input/user.input';
import { ProfileInput } from './input/ProfileInput';

@Resolver((of) => UserModel)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @UseGuards(AuthGuard)
  @Query((returns) => [UserModel])
  async users() {
    return this.userService.getAll();
  }

  // @UseGuards(AuthGuard)
  // @Query((returns) => UserModel)
  // async user(@Context('req') req: any) {
  //   return this.userService.findByInput(input, req.user.id);
  // }

  @UseGuards(AuthGuard)
  @Query((returns) => ProfileInput)
  async profile(@Args('login') login: string, @Context('req') req: any) {
    return this.userService.findByLogin(login, req.user.id);
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
