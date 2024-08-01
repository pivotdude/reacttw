import {
  IGraphqlError,
  sendRequest,
} from '@/shared/lib/utils/graphql/sendRequest';
import gql from 'graphql-tag';

export interface SendCommentResponse {
  createComment: {
    id: number;
  };
  errors?: IGraphqlError[];
}

export const sendComment = async (
  photoId: number,
): Promise<SendCommentResponse> => {
  const query = gql`
    mutation createComment(input: SendCommentInput!) {
      createComment(input: input) {
        id
      }
    }
  `;
  return sendRequest<SendCommentResponse>(query, { input: { photoId } });
};
