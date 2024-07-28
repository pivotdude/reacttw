import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { UserModule } from '../user/user.module';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { AuthModule } from '../auth/auth.module';
import { PhotoModule } from '../photos/photo.module';

export const getGraphqlConfig = (): ApolloDriverConfig => {
  return {
    driver: ApolloDriver,
    autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    include: [UserModule, AuthModule, PhotoModule],
    playground: false,
    plugins: [ApolloServerPluginLandingPageLocalDefault()],
  };
};
