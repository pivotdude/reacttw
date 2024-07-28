import { JwtModuleOptions } from '@nestjs/jwt';

export const getJwtConfig = (): JwtModuleOptions => {
  return {
    global: true,
    secret: process.env.JWT_SECRET,
    signOptions: { expiresIn: '24h' },
  };
};
