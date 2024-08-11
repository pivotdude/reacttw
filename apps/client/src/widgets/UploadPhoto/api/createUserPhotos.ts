import { IGraphqlError, sendRequest } from '@/shared/utils/graphql/sendRequest';
import gql from 'graphql-tag';

export interface ConfirmLoginCodeResponse {
  createUserPhotos?: {
    id: number;
  };
  errors?: IGraphqlError[];
}

export const createUserPhotos = async (
  photoIds: number[],
): Promise<ConfirmLoginCodeResponse> => {
  const query = gql`
    mutation createUserPhotos($input: CreateUserPhotoInput!) {
      createUserPhotos(input: $input) {
        id
        media {
          name
        }
      }
    }
  `;
  return sendRequest<ConfirmLoginCodeResponse>(query, {
    input: { photoIds },
  });
};
