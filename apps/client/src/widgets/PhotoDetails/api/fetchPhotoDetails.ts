import {
  IGraphqlError,
  sendRequest,
} from '@/shared/lib/utils/graphql/sendRequest';
import gql from 'graphql-tag';

export interface FetchPhotoDetailsResponse {
  photo: {
    id: number;
  };
  errors?: IGraphqlError[];
}

export const fetchPhotoDetails = async (
  id: number,
): Promise<FetchPhotoDetailsResponse> => {
  const query = gql`
    query FetchPhotoDetails($id: Int!) {
      photo(id: $id) {
        likes {
          id
          isLike
        }
      }
    }
  `;

  return sendRequest<FetchPhotoDetailsResponse>(query, { id });
};
