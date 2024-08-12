import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { UserModel } from './user.model';
import { UserCreateInput } from './input/UserCreateInput';
import { UserService } from './user.service';
import { ProfileInput } from './input/ProfileInput';
import { UpdateUserInput } from './input/UpdateUserInput';
import { AuthUserId, Relations } from '@/core/decorators';
import { AuthGuard, TokenGuard } from '@/core/guards';

@Resolver(() => UserModel)
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
  async account(@AuthUserId() userId: number, @Relations() relations: any) {
    return this.userService.findById(userId, relations);
  }

  @Mutation(() => UserModel)
  async createUser(@Args('input') input: UserCreateInput) {
    return this.userService.create(input);
  }

  @UseGuards(AuthGuard)
  @Mutation(() => UserModel)
  async updateUser(
    @Args('input') input: UpdateUserInput,
    @AuthUserId() userId: number,
  ) {
    return this.userService.update(userId, input);
  }

  @Mutation(() => UserModel)
  async delete(@Args('id') id: number) {
    return this.userService.delete(id);
  }
}
