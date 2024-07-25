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

    photos: {
      id: number;
      media: {
        url: string;
        name: string;
      };
    };
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
        photos {
          id
          media {
            url
            name
          }
        }
      }
    }
  `;
  return sendRequest<FetchProfileResponse>(query, { login });
};
