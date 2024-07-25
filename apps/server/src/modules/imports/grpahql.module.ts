import { GraphQLModule as GraphQL } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { UserModule } from '../user/user.module';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { AuthModule } from '../auth/auth.module';
import { PhotoModule } from '../photos/photo.module';

export const GraphqlModule = GraphQL.forRoot<ApolloDriverConfig>({
  driver: ApolloDriver,
  autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
  include: [UserModule, AuthModule, PhotoModule],
  playground: false,
  // formatError: (err) => {
  //   return { message: err.message, statusCode: 500 };
  // },
  plugins: [ApolloServerPluginLandingPageLocalDefault()],
});
