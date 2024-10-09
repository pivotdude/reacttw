import { GraphQLClient } from 'graphql-request';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
console.log('backend url', BACKEND_URL);

const client = new GraphQLClient(
  `${BACKEND_URL}/graphql`,
  // {
  //   headers: () => ({ Authorization: 'Bearer ' + (await getServerSession(authOptions)) }),
  // }
);

export default client;
