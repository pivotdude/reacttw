import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { UserModule } from '@m/user/user.module';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { AuthModule } from '@m/auth/auth.module';
import { PhotoModule } from '@m/photo/photo.module';
import { SubscriptionModule } from '@m/subscription/subscription.module';
import { PhotoSavesModule } from '@m/photo/photoSaves/photoSaves.module';

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
