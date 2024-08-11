import { IGraphqlError, sendRequest } from '@/shared/utils/graphql/sendRequest';
import gql from 'graphql-tag';

export interface FetchAccoutResponse {
  account?: {
    login: string;
  };
  errors?: IGraphqlError[];
}

export const fetchAccount = async (): Promise<FetchAccoutResponse> => {
  const query = gql`
    query {
      account {
        login
      }
    }
  `;
  return sendRequest<FetchAccoutResponse>(query);
};
