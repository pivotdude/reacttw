import { IGraphqlError, sendRequest } from '@/shared/utils/graphql/sendRequest';
import gql from 'graphql-tag';

export interface sendLoginCode {
  sendLoginCode?: {
    ok: boolean;
    message: string;
  };
  errors?: IGraphqlError[];
}

export const sendLoginCode = async (email: string): Promise<sendLoginCode> => {
  const query = gql`
    mutation sendLoginCode($input: SendLoginCodeInput!) {
      sendLoginCode(input: $input) {
        ok
        message
      }
    }
  `;
  return sendRequest<sendLoginCode>(query, { input: { email } });
};
