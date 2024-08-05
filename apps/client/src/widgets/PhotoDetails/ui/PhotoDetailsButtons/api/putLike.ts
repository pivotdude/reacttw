import {
  IGraphqlError,
  sendRequest,
} from '@/shared/lib/utils/graphql/sendRequest';
import gql from 'graphql-tag';

export interface PutLikeResponse {
  addPhotoLike: {
    id: number;
  };
  errors?: IGraphqlError[];
}

export const putLike = async (photoId: number): Promise<PutLikeResponse> => {
  const query = gql`
    mutation addPhotoLike($input: addPhotoLikeInput!) {
      addPhotoLike(input: $input) {
        id
      }
    }
  `;

  return sendRequest<PutLikeResponse>(query, { input: { photoId } });
};
