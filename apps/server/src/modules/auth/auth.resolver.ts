import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { SendLoginCodeInput } from './input/SendLoginCodeInput';
import { AuthAnswer } from './input/authAnswer.model';
import { SendRegisterCodeInput } from './input/SendRegisterCodeInput';
import { ConfirmLoginCodeInput } from './input/ConfirmLoginCodeInput';
import { ConfirmRegisterCodeInput } from './input/ConfirmRegisterCodeInput';
import { LoginAnswerModel } from './input/loginAnswer.model';

@Resolver((of) => AuthAnswer)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation((returns) => AuthAnswer)
  async sendLoginCode(
    @Args('input') input: SendLoginCodeInput,
  ): Promise<AuthAnswer> {
    return this.authService.sendLoginCode(input);
  }

  @Mutation((returns) => AuthAnswer)
  async sendRegisterCode(
    @Args('input') input: SendRegisterCodeInput,
  ): Promise<AuthAnswer> {
    return this.authService.sendRegisterCode(input);
  }

  @Mutation((returns) => LoginAnswerModel)
  async confirmLogin(
    @Args('input') input: ConfirmLoginCodeInput,
  ): Promise<AuthAnswer> {
    return this.authService.confirmLogin(input);
  }

  @Mutation((returns) => AuthAnswer)
  async confirmRegister(
    @Args('input') input: ConfirmRegisterCodeInput,
  ): Promise<AuthAnswer> {
    return this.authService.confirmRegister(input);
  }
}
