import Http from '../Http';
import * as action from '../store/actions';
import {toastAction} from '../store/actions/toast-actions';
import Message from '../utilities/message';

export function login(credentials) {
  return dispatch => (
    new Promise((resolve, reject) => {
      Http.post(process.env.REACT_APP_API_URL+'api/v1/login', credentials) //  process.env.REACT_APP_API_URL From .env
        .then((res) => {          
          dispatch(action.authLogin(res.data));
          dispatch(action.loader(false));
          toastAction(true, Message.loginSuccessfull);
          return resolve();
        })
        .catch((err) => {
          const { status, errors } = err.response.data;
          const data = {
            status,
            errors,
          };
          dispatch(action.loader(false));
          return reject(data);
        });
    })
  );
}

export function register(credentials) {
  return dispatch => (
    new Promise((resolve, reject) => {
      Http.post('http://localhost/api/v1/auth/register', credentials)
        .then(res => resolve(res.data))
        .catch((err) => {
          const { status, errors } = err.response.data;
          const data = {
            status,
            errors,
          };
          return reject(data);
        });
    })
  );
}

export function resetPassword(credentials) {
  return dispatch => (
    new Promise((resolve, reject) => {
      Http.post('http://localhost/api/v1/auth/forgot-password', credentials)
        .then(res => resolve(res.data))
        .catch((err) => {
          const { status, errors } = err.response.data;
          const data = {
            status,
            errors,
          };
          return reject(data);
        });
    })
  );
}

export function updatePassword(credentials) {
  return dispatch => (
    new Promise((resolve, reject) => {
      Http.post('http://localhost/api/v1/auth/password-reset', credentials)
        .then((res) => {
          const { status } = res.data.status;
          if (status === 202) {
            const data = {
              error: res.data.message,
              status,
            };
            return reject(data);
          }
          return resolve(res);
        })
        .catch((err) => {
          const { status, errors } = err.response.data;
          const data = {
            status,
            errors,
          };
          return reject(data);
        });
    })
  );
}
