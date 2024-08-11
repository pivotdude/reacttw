import { IGraphqlError, sendRequest } from '@/shared/utils/graphql/sendRequest';
import gql from 'graphql-tag';

export interface PutDislikeResponse {
  addPhotoLike: {
    id: number;
  };
  errors?: IGraphqlError[];
}

export const putDislike = async (
  photoId: number,
): Promise<PutDislikeResponse> => {
  const query = gql`
    mutation addPhotoDislike($input: addPhotoLikeInput!) {
      addPhotoDislike(input: $input) {
        id
      }
    }
  `;

  return sendRequest<PutDislikeResponse>(query, { input: { photoId } });
};
