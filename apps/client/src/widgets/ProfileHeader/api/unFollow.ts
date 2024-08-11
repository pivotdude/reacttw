import { IGraphqlError, sendRequest } from '@/shared/utils/graphql/sendRequest';
import gql from 'graphql-tag';

export interface UnFollowResponse {
  unFollow: {
    id: number;
  };
  errors?: IGraphqlError[];
}

export const unFollow = async (userId: number): Promise<UnFollowResponse> => {
  const query = gql`
    mutation UnFollow($userId: Int!) {
      unfollow(userId: $userId) {
        id
      }
    }
  `;

  return sendRequest<UnFollowResponse>(query, { userId });
};
