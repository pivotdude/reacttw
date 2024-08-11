import { IGraphqlError, sendRequest } from '@/shared/utils/graphql/sendRequest';
import gql from 'graphql-tag';

export interface PutLikeResponse {
  addPhotoLike: {
    id: number;
  };
  errors?: IGraphqlError[];
}

export const deleteLike = async (photoId: number): Promise<PutLikeResponse> => {
  const query = gql`
    mutation addPhotoLike($input: addPhotoLikeInput!) {
      deletePhotoLike(input: $input) {
        id
      }
    }
  `;

  return sendRequest<PutLikeResponse>(query, { input: { photoId } });
};
