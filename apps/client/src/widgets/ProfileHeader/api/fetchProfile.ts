import { IGraphqlError, sendRequest } from '@/shared/utils/graphql/sendRequest';
import gql from 'graphql-tag';

export interface FetchProfileResponse {
  user: {
    id: number;
    name: string;
    isUserProfile: boolean;
    isUserFollow: boolean;
    login: string;
    subscriptionsCount: number;
    subscribersCount: number;
    avatar: {
      url: string;
    };
  };
  errors?: IGraphqlError[];
}

export const fetchProfile = async (
  login: string,
): Promise<FetchProfileResponse> => {
  const query = gql`
    query FetchProfile($login: String!) {
      user(login: $login) {
        id
        name
        isUserProfile
        isUserFollow
        login
        subscriptionsCount
        subscribersCount
        avatar {
          url
        }
      }
    }
  `;

  return sendRequest<FetchProfileResponse>(query, { login });
};
