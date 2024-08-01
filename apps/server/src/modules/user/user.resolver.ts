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
import { AuthGuard } from '../auth/guard/AuthGuard';
import { GraphQLResolveInfo } from 'graphql';
import { UpdateUserInput } from './input/UpdateUserInput';
import { getRelations } from 'src/utils/getRelations';

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

  @UseGuards(AuthGuard)
  @Query((returns) => UserModel)
  async account(@Context('req') req: any, @Info() info: GraphQLResolveInfo) {
    const relations = getRelations(info);
    return this.userService.findById(req?.user?.id, relations);
  }

  @Mutation((returns) => UserModel)
  async createUser(@Args('input') input: UserCreateInput) {
    return this.userService.create(input);
  }

  @UseGuards(AuthGuard)
  @Mutation((returns) => UserModel)
  async updateUser(
    @Args('input') input: UpdateUserInput,
    @Context('req') req: any,
  ) {
    return this.userService.update(req.user.id, input);
  }

  @Mutation((returns) => UserModel)
  async delete(@Args('id') id: number) {
    return this.userService.delete(id);
  }
}
