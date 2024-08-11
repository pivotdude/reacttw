import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { UserModule } from '../user/user.module';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { AuthModule } from '../auth/auth.module';
import { PhotoModule } from '../photo/photo.module';
import { SubscriptionModule } from '../subscription/subscription.module';
import { PhotoSavesModule } from '../photo/photoSaves/photoSaves.module';

export const getGraphqlConfig = (): ApolloDriverConfig => {
  return {
    driver: ApolloDriver,
    autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    include: [
      UserModule,
      AuthModule,
      PhotoModule,
      SubscriptionModule,
      PhotoSavesModule,
    ],
    playground: false,
    plugins: [ApolloServerPluginLandingPageLocalDefault()],
  };
};
