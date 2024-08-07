import {
  IGraphqlError,
  sendRequest,
} from '@/shared/lib/utils/graphql/sendRequest';
import gql from 'graphql-tag';

export interface FollowResponse {
  follow: {
    id: number;
  };
  errors?: IGraphqlError[];
}

export const follow = async (userId: number): Promise<FollowResponse> => {
  const query = gql`
    mutation Follow($userId: Int!) {
      follow(userId: $userId) {
        id
      }
    }
  `;

  return sendRequest<FollowResponse>(query, { userId });
};
