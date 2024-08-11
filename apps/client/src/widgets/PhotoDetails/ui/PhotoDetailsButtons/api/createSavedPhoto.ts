import { IGraphqlError, sendRequest } from '@/shared/utils/graphql/sendRequest';
import gql from 'graphql-tag';

export interface CreateSavedPhotoResponse {
  CreateSavedPhoto: {
    id: number;
  };
  errors?: IGraphqlError[];
}

export const createSavedPhoto = async (
  photo: number,
): Promise<CreateSavedPhotoResponse> => {
  const query = gql`
    mutation CreateSavedPhoto($input: PhotoSavesInput!) {
      createPhotoSaves(input: $input) {
        id
      }
    }
  `;

  return sendRequest<CreateSavedPhotoResponse>(query, { input: { photo } });
};
