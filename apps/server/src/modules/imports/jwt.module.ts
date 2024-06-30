import { JwtModule as NestJwtModule } from '@nestjs/jwt';

export const JwtModule = NestJwtModule.register({
  global: true,
  secret: process.env.JWT_SECRET,
  signOptions: { expiresIn: '24h' },
});
