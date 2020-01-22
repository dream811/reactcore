import * as ActionTypes from '../action-types';

export function authLogin(payload) {
  return {
    type: ActionTypes.AUTH_LOGIN,
    payload,
  };
}

export function authLogout() {
  return {
    type: ActionTypes.AUTH_LOGOUT,
  };
}

export function authCheck() {
  return {
    type: ActionTypes.AUTH_CHECK,
  };
}


export function loader(status) {
  return {
    type: ActionTypes.LOADING,
    status
  };
}

// export function producerAgencyAdd(data) {
//   return {
//     type: ActionTypes.PRODUCER_AGENCY_ADD,
//     data,
//   };
// }

