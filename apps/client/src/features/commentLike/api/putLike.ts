import { IGraphqlError, sendRequest } from '@/shared/utils/graphql/sendRequest';
import gql from 'graphql-tag';

export interface PutLikeResponse {
  addCommentLike: {
    id: number;
  };
  errors?: IGraphqlError[];
}

export const putLike = async (commentId: number): Promise<PutLikeResponse> => {
  const query = gql`
    mutation addCommentLike($input: AddCommentLikeInput!) {
      addCommentLike(input: $input) {
        id
      }
    }
  `;

  return sendRequest<PutLikeResponse>(query, { input: { commentId } });
};
