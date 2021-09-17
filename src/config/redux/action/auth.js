import * as types from '../types';

export const set_login = payload => ({
  type: types.auth.LOGIN_RD,
  payload,
});
