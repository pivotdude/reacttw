import {
  IGraphqlError,
  sendRequest,
} from '@/shared/lib/utils/graphql/sendRequest';
import gql from 'graphql-tag';

export interface FetchProfileResponse {
  profile: {
    name?: string;
    isUserProfile: boolean;
    login: string;
  };
  errors?: IGraphqlError[];
}

export const fetchProfile = async (
  login: string,
): Promise<FetchProfileResponse> => {
  const query = gql`
    query ($login: String!) {
      profile(login: $login) {
        name
        isUserProfile
        login
      }
    }
  `;
  return sendRequest<FetchProfileResponse>(query, { login });
};
