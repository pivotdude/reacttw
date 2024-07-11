import { GraphQLClient } from 'graphql-request';

const client = new GraphQLClient(
  'http://192.168.0.120:3005/graphql',
  // {
  //   headers: () => ({ Authorization: 'Bearer ' + (await getServerSession(authOptions)) }),
  // }
);

export default client;
