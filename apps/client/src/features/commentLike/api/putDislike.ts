import { IGraphqlError, sendRequest } from '@/shared/utils/graphql/sendRequest';
import gql from 'graphql-tag';

export interface PutDislikeResponse {
  addCommentDislike: {
    id: number;
  };
  errors?: IGraphqlError[];
}

export const putDislike = async (
  commentId: number,
): Promise<PutDislikeResponse> => {
  const query = gql`
    mutation addCommentDislike($input: AddCommentLikeInput!) {
      addCommentDislike(input: $input) {
        id
      }
    }
  `;

  return sendRequest<PutDislikeResponse>(query, { input: { commentId } });
};
