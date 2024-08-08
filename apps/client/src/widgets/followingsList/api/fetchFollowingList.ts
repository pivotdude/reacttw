import {
  IGraphqlError,
  sendRequest,
} from '@/shared/lib/utils/graphql/sendRequest';
import gql from 'graphql-tag';
import { IFollowing } from '../store/useFollowingListStore';

export interface FetchFollowersListResponse {
  user: {
    subscribers: IFollowing[];
  };
  errors?: IGraphqlError[];
}

export const fetchFollowingList = async (
  login: string,
): Promise<FetchFollowersListResponse> => {
  const query = gql`
    query FetchFollowersList($login: String!) {
      user(login: $login) {
        subscriptions {
          id
          createdAt
          user {
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

  return sendRequest<FetchFollowersListResponse>(query, { login });
};
