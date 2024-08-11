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
import { Relations } from 'src/core/decorators/Relations';
import { AuthUserId } from 'src/core/decorators/AuthUserId';

@Resolver((of) => UserModel)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @UseGuards()
  @Query(() => [UserModel])
  async users() {
    return this.userService.getAll();
  }

  @UseGuards(TokenGuard)
  @Query(() => ProfileInput)
  async user(
    @Args('login') login: string,
    @AuthUserId() userId: number,
    @Relations() relations: any,
  ) {
    return this.userService.findByLogin(login, userId, relations);
  }

  @UseGuards(AuthGuard)
  @Query(() => UserModel)
  async account(@Context('req') req: any, @Info() info: GraphQLResolveInfo) {
    const relations = getRelations(info);
    return this.userService.findById(req?.user?.id, relations);
  }

  @Mutation(() => UserModel)
  async createUser(@Args('input') input: UserCreateInput) {
    return this.userService.create(input);
  }

  @UseGuards(AuthGuard)
  @Mutation(() => UserModel)
  async updateUser(
    @Args('input') input: UpdateUserInput,
    @Context('req') req: any,
  ) {
    return this.userService.update(req.user.id, input);
  }

  @Mutation(() => UserModel)
  async delete(@Args('id') id: number) {
    return this.userService.delete(id);
  }
}
