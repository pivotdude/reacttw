import { ConfigModuleOptions } from '@nestjs/config';

export const getConfigMConfig = (): ConfigModuleOptions => {
  return {
    isGlobal: true,
    envFilePath: '.env',
  };
};
