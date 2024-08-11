import { IGraphqlError, sendRequest } from '@/shared/utils/graphql/sendRequest';
import gql from 'graphql-tag';

export interface FetchPhotoDetailsResponse {
  photo: {
    likeCount: number;
    dislikeCount: number;
    userSaved: boolean;
    userLiked: boolean;
    userDisliked: boolean;
  };
  errors?: IGraphqlError[];
}

export const fetchPhotoDetails = async (
  id: number,
): Promise<FetchPhotoDetailsResponse> => {
  const query = gql`
    query FetchPhotoDetails($id: Int!) {
      photo(id: $id) {
        likeCount
        dislikeCount
        userSaved
        userLiked
        userDisliked
      }
    }
  `;

  return sendRequest<FetchPhotoDetailsResponse>(query, { id });
};
