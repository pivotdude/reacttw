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

interface ConfirmRegisterCodeParams {
  login: string;
  code: string;
  name: string;
  email: string;
}

export const сonfirmRegisterCode = async (
  input: ConfirmRegisterCodeParams,
): Promise<ConfirmRegisterCodeResponse> => {
  const query = gql`
    mutation confirmRegister($input: ConfirmRegisterCodeInput!) {
      confirmRegister(input: $input) {
        ok
        message
      }
    }
  `;

  return sendRequest<ConfirmRegisterCodeResponse>(query, { input });
};
