import { IGraphqlError, sendRequest } from '@/shared/utils/graphql/sendRequest';
import gql from 'graphql-tag';

export interface DeleteSavedPhotoResponse {
  DeleteSavedPhoto: {
    id: number;
  };
  errors?: IGraphqlError[];
}

export const deleteSavedPhoto = async (
  photo: number,
): Promise<DeleteSavedPhotoResponse> => {
  const query = gql`
    mutation DeleteSavedPhoto($input: PhotoSavesInput!) {
      deletePhotoSaves(input: $input) {
        id
      }
    }
  `;

  return sendRequest<DeleteSavedPhotoResponse>(query, { input: { photo } });
};
