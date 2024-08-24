import { IGraphqlError, sendRequest } from '@/shared/utils/graphql/sendRequest';
import gql from 'graphql-tag';

export interface PutLikeResponse {
  deleteCommentLike: {
    id: number;
  };
  errors?: IGraphqlError[];
}

export const deleteLike = async (commentId: number): Promise<PutLikeResponse> => {
  const query = gql`
    mutation deleteCommentLike($input: AddCommentLikeInput!) {
      deleteCommentLike(input: $input) {
        id
      }
    }
  `;

  return sendRequest<PutLikeResponse>(query, { input: { commentId } });
};
