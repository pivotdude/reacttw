import { IGraphqlError, sendRequest } from '@/shared/utils/graphql/sendRequest';
import gql from 'graphql-tag';
import { IPhoto } from '../types';

export interface FetchPhotosResponse {
  user: {
    photos: IPhoto[];
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
