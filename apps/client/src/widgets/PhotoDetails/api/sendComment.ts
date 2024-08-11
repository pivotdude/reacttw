import { IGraphqlError, sendRequest } from '@/shared/utils/graphql/sendRequest';
import gql from 'graphql-tag';
import { IComment } from '../models';

export interface SendCommentResponse {
  createComment: IComment;
  errors?: IGraphqlError[];
}

export const sendComment = async (
  photo: number,
  text: string,
): Promise<SendCommentResponse> => {
  const query = gql`
    mutation sendComment($input: CreateCommentInput!) {
      createComment(input: $input) {
        text
        createdAt
        user {
          login
          avatar {
            name
            url
          }
        }
      }
    }
  `;

  return sendRequest<SendCommentResponse>(query, { input: { photo, text } });
};
