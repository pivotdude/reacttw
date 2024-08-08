import {
  IGraphqlError,
  sendRequest,
} from '@/shared/lib/utils/graphql/sendRequest';
import gql from 'graphql-tag';

export interface FetchPhotosResponse {
  user: {
    photos: {
      id: number;
      media: {
        url: string;
        name: string;
      };
      user: {
        login: string;
        avatar: {
          url: string;
        };
      };
    }[];
  };
  errors?: IGraphqlError[];
}

export const fetchPhotos = async (
  login: string,
): Promise<FetchPhotosResponse> => {
  const query = gql`
    query ($login: String!) {
      user(login: $login) {
        photos {
          id
          media {
            url
            name
          }
          user {
            login
            avatar {
              url
            }
          }
        }
      }
    }
  `;
  return sendRequest<FetchPhotosResponse>(query, { login });
};
