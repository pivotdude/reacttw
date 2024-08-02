import {
  IGraphqlError,
  sendRequest,
} from '@/shared/lib/utils/graphql/sendRequest';
import gql from 'graphql-tag';
import { IComment } from '../models';

export interface FetchCommentsResponse {
  comments: IComment[];
  errors?: IGraphqlError[];
}

export const fetchComments = async (
  photoId: number,
): Promise<FetchCommentsResponse> => {
  const query = gql`
    query fetchComments($input: CommentsInput!) {
      comments(input: $input) {
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

  return sendRequest<FetchCommentsResponse>(query, { input: { photoId } });
};
