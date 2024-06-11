import { GraphQLModule as GraphQL } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { UserModule } from '../user/user.module';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default'

export const GraphqlModule = GraphQL.forRoot<ApolloDriverConfig>({
  driver: ApolloDriver,
  autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
  include: [UserModule],
  playground: false,
  plugins: [ApolloServerPluginLandingPageLocalDefault()],
});
