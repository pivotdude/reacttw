import {
  IGraphqlError,
  sendRequest,
} from '@/shared/lib/utils/graphql/sendRequest';
import gql from 'graphql-tag';

export interface FetchProfileResponse {
  profile?: {
    login: string;
  };
  errors?: IGraphqlError[];
}

export const fetchProfile = async (): Promise<FetchProfileResponse> => {
  const query = gql`
    query {
      profile {
        login
      }
    }
  `;
  return sendRequest<FetchProfileResponse>(query);
};
