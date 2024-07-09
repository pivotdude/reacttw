import { GraphQLClient } from 'graphql-request';

const client = new GraphQLClient(
  'http://localhost:3000/graphql',
  // {
  //   headers: () => ({ Authorization: 'Bearer ' + (await getServerSession(authOptions)) }),
  // }
);

export default client;
