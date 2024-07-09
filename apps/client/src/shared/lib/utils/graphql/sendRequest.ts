import client from './client';

export interface IGraphqlError {
  message: string;
}

export async function sendRequest<T>(
  query: any,
  vars: any = {},
): Promise<T | any> {
  const token = localStorage.getItem('accessToken');

  try {
    return await client.request<T>(query, vars, {
      Authorization: token || '',
    });
  } catch (error) {
    // @ts-ignore
    return error.response;
  }
}
