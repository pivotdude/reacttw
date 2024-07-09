import {
  IGraphqlError,
  sendRequest,
} from '@/shared/lib/utils/graphql/sendRequest';
import gql from 'graphql-tag';

export interface ConfirmRegisterCodeResponse {
  confirmRegisterCode?: {
    ok: boolean;
    message: string;
  };
  errors?: IGraphqlError[];
}

export const сonfirmRegisterCode = async (
  email: string,
  code: string,
): Promise<ConfirmRegisterCodeResponse> => {
  const query = gql`
    mutation confirmRegister($input: ConfirmRegisterCodeInput!) {
      confirmRegister(input: $input) {
        ok
        message
      }
    }
  `;
  return sendRequest<ConfirmRegisterCodeResponse>(query, {
    input: { email, code },
  });
};
