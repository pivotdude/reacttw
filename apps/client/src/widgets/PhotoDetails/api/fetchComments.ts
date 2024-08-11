import { IGraphqlError, sendRequest } from '@/shared/utils/graphql/sendRequest';
import gql from 'graphql-tag';
import { IComment } from '../models';

export interface FetchCommentsResponse {
  comments: IComment[];
  errors?: IGraphqlError[];
}

export const fetchComments = async (
  photoId: number,
  pagination?: { offset: number; limit: number },
): Promise<FetchCommentsResponse> => {
  const query = gql`
    query fetchComments($input: CommentsInput!) {
      comments(input: $input) {
        id
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

  return sendRequest<FetchCommentsResponse>(query, {
    input: { photoId, pagination },
  });
};
