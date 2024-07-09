import {
  IGraphqlError,
  sendRequest,
} from '@/shared/lib/utils/graphql/sendRequest';
import gql from 'graphql-tag';

export interface ConfirmLoginCodeResponse {
  profile?: {
    name: string;
    email: string;
  };
  errors?: IGraphqlError[];
}

export const usersFetch = async (): Promise<ConfirmLoginCodeResponse> => {
  const query = gql`
    query {
      profile {
        name
        id
        email
        createdAt
      }
    }
  `;
  return sendRequest<ConfirmLoginCodeResponse>(query);
};
