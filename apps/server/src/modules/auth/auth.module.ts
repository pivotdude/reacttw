import { forwardRef, Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { JwtModule } from '../imports/jwt.module';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { EmailModule } from '../email/email.module';

@Module({
  imports: [
    forwardRef(() => UserModule),
    JwtModule,
    forwardRef(() => EmailModule),
  ],
  providers: [AuthModule, AuthService, AuthResolver],
  exports: [AuthService],
})
export class AuthModule {}
