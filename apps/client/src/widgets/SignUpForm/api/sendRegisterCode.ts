import {
  IGraphqlError,
  sendRequest,
} from '@/shared/lib/utils/graphql/sendRequest';
import gql from 'graphql-tag';

export interface sendLoginCode {
  sendRegisterCode: {
    ok: boolean;
    message: string;
  };
  errors?: IGraphqlError[];
}

export const sendRegisterCode = async (
  email: string,
): Promise<sendLoginCode> => {
  const query = gql`
    mutation sendRegisterCode($input: SendRegisterCodeInput!) {
      sendRegisterCode(input: $input) {
        ok
        message
      }
    }
  `;
  return sendRequest<sendLoginCode>(query, { input: { email } });
};
