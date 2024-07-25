import { UserService } from './user.service';
import {
  Args,
  Context,
  Info,
  Mutation,
  Query,
  Resolver,
} from '@nestjs/graphql';
import { UserModel } from './user.model';
import { UserCreateInput } from './input/UserCreateInput';
import { UseGuards } from '@nestjs/common';
import { ProfileInput } from './input/ProfileInput';
import { TokenGuard } from '../auth/guard/TokenGuard';
import { RequiredAuthGuard } from '../auth/guard/RequiredAuthGuard';
import { GraphQLResolveInfo } from 'graphql';

@Resolver((of) => UserModel)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @UseGuards()
  @Query((returns) => [UserModel])
  async users() {
    return this.userService.getAll();
  }

  // @UseGuards(AuthGuard)
  // @Query((returns) => UserModel)
  // async user(@Context('req') req: any) {
  //   return this.userService.findByInput(input, req.user.id);
  // }

  @UseGuards(TokenGuard)
  @Query((returns) => ProfileInput)
  async profile(
    @Args('login') login: string,
    @Context('req') req: any,
    @Info() info: GraphQLResolveInfo,
  ) {
    return this.userService.findByLogin(login, req?.user?.id, info);
  }

  @UseGuards(RequiredAuthGuard)
  @Query((returns) => UserModel)
  async account(@Context('req') req: any) {
    return this.userService.findById(req?.user?.id);
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
