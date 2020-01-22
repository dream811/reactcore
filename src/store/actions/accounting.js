import * as ActionTypes from '../action-types';

export function getAccountTypes(payload) {
  return {
    type: ActionTypes.GET_ACCOUNT_TYPES,
    payload,
  };
}
export function getAccounts(payload) {
  return {
    type: ActionTypes.GET_ACCOUNTS,
    payload,
  };
}