import { UserService } from './user.service';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserModel } from './user.model';
import { UserCreateInput } from './input/UserCreateInput';

@Resolver((of) => UserModel)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query((returns) => [UserModel])
  async users() {
    return this.userService.getAll();
  }

  @Query((returns) => UserModel)
  async user(@Args('id') id: number) {
    return this.userService.findById(id);
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
