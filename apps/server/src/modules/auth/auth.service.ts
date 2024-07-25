import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { SendLoginCodeInput } from './input/SendLoginCodeInput';
import { EmailService } from '../email/email.service';
import { SendRegisterCodeInput } from './input/SendRegisterCodeInput';
import { ConfirmLoginCodeInput } from './input/ConfirmLoginCodeInput';
import { ConfirmRegisterCodeInput } from './input/ConfirmRegisterCodeInput';
import { AuthAnswer } from './input/authAnswer.model';
import { LoginAnswerModel } from './input/loginAnswer.model';
import { ErrorEnum } from 'src/constants/errors';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private emailService: EmailService,
  ) {}

  async sendLoginCode(input: SendLoginCodeInput) {
    const code = '0000';
    const user = await this.userService.findByEmail(input.email);
    if (!user) {
      throw new UnauthorizedException(ErrorEnum.USER_NOT_FOUND);
    }
    await this.emailService.send({
      email: input.email,
      type: 'LOGIN',
      context: {
        code,
        name: 'Челик',
      },
    });
    return { ok: true, message: 'Success. Code has sent!' };
  }

  async sendRegisterCode(input: SendRegisterCodeInput) {
    const code = '0000';
    const user = await this.userService.findByEmail(input.email);
    if (user) {
      throw new UnauthorizedException('Email was used!');
    }
    await this.emailService.send({
      email: input.email,
      type: 'REGISTER',
      context: {
        code,
        name: 'Челик',
      },
    });
    return { ok: true, message: 'Success. Code has sent!' };
  }

  async confirmRegister(input: ConfirmRegisterCodeInput): Promise<AuthAnswer> {
    await this.checkCode(input.email, input.code);
    await this.userService.create({
      name: 'Alex',
      email: input.email,
      login: 'wasdddd', // todo
    });

    return {
      ok: true,
      message: 'yeees',
    };
  }

  async confirmLogin(input: ConfirmLoginCodeInput): Promise<LoginAnswerModel> {
    await this.checkCode(input.email, input.code);
    const user = await this.userService.findByEmail(input.email);
    const payload = { sub: user.id };
    const accessToken = await this.jwtService.signAsync(payload);

    return {
      ok: true,
      message: 'Yesssss.',
      accessToken,
    };
  }

  private async checkCode(emailAdress: string, code: string): Promise<void> {
    const email = await this.emailService.findLast(emailAdress);

    if (!email) {
      throw new UnauthorizedException(ErrorEnum.CODE_NOT_FOUND);
    }

    if (false) {
      // TODO
      throw new UnauthorizedException(ErrorEnum.CODE_EXPIRED);
    }

    if (code !== email.data.code) {
      throw new UnauthorizedException(ErrorEnum.CODE_INCORRECT);
    }
  }

  public async getUserIdByToken(token: string) {
    const data: { sub: number; iat: number; exp: number } =
      await this.jwtService.verifyAsync(token);

    return data.sub;
  }
}
