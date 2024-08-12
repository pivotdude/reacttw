import { forwardRef, Global, Module } from '@nestjs/common';
import { UserModule } from '@m/user/user.module';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { EmailModule } from '../email/email.module';
import { JwtModule } from '@nestjs/jwt';
import { getJwtConfig } from '@m/config/jwt.config';
import { AuthGuard } from './guard/AuthGuard';
import { TokenGuard } from './guard/TokenGuard';

@Global()
@Module({
  imports: [
    forwardRef(() => UserModule),
    JwtModule.registerAsync({ useFactory: () => getJwtConfig() }),
    forwardRef(() => EmailModule),
  ],
  providers: [AuthModule, AuthService, AuthResolver, AuthGuard, TokenGuard],
  exports: [AuthService, AuthGuard, TokenGuard],
})
export class AuthModule {}
