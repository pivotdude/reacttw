import {
  IGraphqlError,
  sendRequest,
} from '@/shared/lib/utils/graphql/sendRequest';
import gql from 'graphql-tag';

export interface ConfirmLoginCodeResponse {
  confirmLogin?: {
    ok: boolean;
    message: string;
    accessToken: string;
  };
  errors?: IGraphqlError[];
}

export const сonfirmLoginCode = async (
  email: string,
  code: string,
): Promise<ConfirmLoginCodeResponse> => {
  const query = gql`
    mutation confirmLogin($input: ConfirmLoginCodeInput!) {
      confirmLogin(input: $input) {
        ok
        accessToken
        message
      }
    }
  `;
  return sendRequest<ConfirmLoginCodeResponse>(query, {
    input: { email, code },
  });
};
