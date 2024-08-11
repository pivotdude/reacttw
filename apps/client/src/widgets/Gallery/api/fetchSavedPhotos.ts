import { IGraphqlError, sendRequest } from '@/shared/utils/graphql/sendRequest';
import gql from 'graphql-tag';
import { ISavedPhoto } from '../types';

export interface FetchSavedPhotosResponse {
  user: {
    savedPhotos: ISavedPhoto[];
  };
  errors?: IGraphqlError[];
}

export const fetchSavedPhotos = async (
  login: string,
): Promise<FetchSavedPhotosResponse> => {
  const query = gql`
    query ($login: String!) {
      user(login: $login) {
        savedPhotos {
          photo {
            id
            media {
              url
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
    }
  `;
  return sendRequest<FetchSavedPhotosResponse>(query, { login });
};
