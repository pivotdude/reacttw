import { GraphQLClient } from 'graphql-request';

function getBackendUrl() {
  const backendUrlVite = import.meta.env.VITE_BACKEND_URL;
  if (backendUrlVite && backendUrlVite !== 'undefined') {
    return backendUrlVite;
  }

  const processEnvUrl = process?.env.VITE_BACKEND_URL;
  if (processEnvUrl && processEnvUrl !== 'undefined') {
    return process?.env.VITE_BACKEND_URL;
  }

  throw new Error('VITE_BACKEND_URL is not defined');
}

const BACKEND_URL = getBackendUrl();

const client = new GraphQLClient(
  `${BACKEND_URL}/graphql`,
  // {
  //   headers: () => ({ Authorization: 'Bearer ' + (await getServerSession(authOptions)) }),
  // }
);

export default client;
