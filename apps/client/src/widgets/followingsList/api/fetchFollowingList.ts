import { IGraphqlError, sendRequest } from '@/shared/utils/graphql/sendRequest';
import gql from 'graphql-tag';
import { IFollowing } from '../store/useFollowingListStore';

export interface FetchFollowingListResponse {
  user: {
    subscriptions: IFollowing[];
  };
  errors?: IGraphqlError[];
}

export const fetchFollowingList = async (
  login: string,
): Promise<FetchFollowingListResponse> => {
  const query = gql`
    query FetchFollowersList($login: String!) {
      user(login: $login) {
        subscriptions {
          id
          createdAt
          author {
            name
            login
            avatar {
              url
            }
          }
        }
      }
    }
  `;

  return sendRequest<FetchFollowingListResponse>(query, { login });
};
