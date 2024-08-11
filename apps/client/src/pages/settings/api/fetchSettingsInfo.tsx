import { IGraphqlError, sendRequest } from '@/shared/utils/graphql/sendRequest';
import gql from 'graphql-tag';

export interface FetchSettingsInfoResponse {
  account: {
    login: string;
    email: string;
    name: string;
    avatar?: {
      url: string;
    };
  };
  errors?: IGraphqlError[];
}

export const fetchSettingsInfo =
  async (): Promise<FetchSettingsInfoResponse> => {
    const query = gql`
      query SettingsInfo {
        account {
          login
          email
          name
          avatar {
            url
          }
        }
      }
    `;
    return sendRequest<FetchSettingsInfoResponse>(query);
  };
