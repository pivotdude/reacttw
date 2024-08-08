import {
  IGraphqlError,
  sendRequest,
} from '@/shared/lib/utils/graphql/sendRequest';
import gql from 'graphql-tag';
import { IFollower } from '../store/useFollowersListStore';

export interface FetchFollowersListResponse {
  user: {
    subscribers: IFollower[];
  };
  errors?: IGraphqlError[];
}

export const fetchFollowersList = async (
  login: string,
): Promise<FetchFollowersListResponse> => {
  const query = gql`
    query FetchFollowersList($login: String!) {
      user(login: $login) {
        subscribers {
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
