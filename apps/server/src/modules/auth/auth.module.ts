import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { JwtModule } from '../imports/jwt.module';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';

@Module({
  imports: [UserModule, JwtModule],
  providers: [AuthModule, AuthService, AuthResolver],
})
export class AuthModule {}
