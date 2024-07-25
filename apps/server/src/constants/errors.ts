export enum ErrorEnum {
  // Base errors
  GENERIC_ERROR = 'A generic error occurred',

  // Auth errors
  USER_NOT_FOUND = 'User not found',
  EMAIL_USED = 'Email was used!',
  CODE_NOT_FOUND = 'Code not found!',
  CODE_EXPIRED = 'Code has expired!',
  CODE_INCORRECT = 'Code not correct!',
}
