import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthService } from '../auth.service';
import { ErrorEnum } from '@/constants/errors';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly authService: AuthService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context);
    const { req } = ctx.getContext();
    const token = req.headers.authorization;

    if (!token || token === 'undefined') {
      throw new ForbiddenException(ErrorEnum.NOT_AUTH);
    }

    try {
      const userId = await this.authService.getUserIdByToken(token);
      req.user = { id: userId };
      return true;
    } catch (error) {
      throw new ForbiddenException(ErrorEnum.NOT_AUTH);
    }
  }
}
