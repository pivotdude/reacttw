import { Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';

@Resolver((of) => {})
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}
}
