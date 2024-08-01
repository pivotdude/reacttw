import {
  IGraphqlError,
  sendRequest,
} from '@/shared/lib/utils/graphql/sendRequest';
import gql from 'graphql-tag';
import { IPhoto } from '../model';

export interface GetImagesResponse {
  photos: IPhoto[];
  errors?: IGraphqlError[];
}

export const fetchImageFeed = async (): Promise<GetImagesResponse> => {
  const query = gql`
    query GetPhotos {
      photos {
        id
        media {
          name
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
  `;

  return sendRequest<GetImagesResponse>(query);
};
