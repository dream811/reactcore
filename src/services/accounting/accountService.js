import querystring from 'querystring';
import Http from '../../Http';
import { loader } from '../../store/actions';
import * as action from '../../store/actions/accounting';
import { toastAction } from '../../store/actions/toast-actions';
/*********** Add Account Type ************/
export function accountType(payload) {
    return dispatch => (
        new Promise((resolve, reject) => {
            dispatch(loader(true));
            Http.post(`${process.env.REACT_APP_URL}/saveAccountType`, payload)
                .then((res) => {
                    dispatch(loader(false));
                    toastAction(true, res.data.message);
                    return resolve(true);
                })
                .catch((err) => {
                    const { status, errors } = err.response.data;
                    const data = {
                        status,
                        errors,
                    };
                    dispatch(loader(false));
                    toastAction(false, errors);
                    return reject(false);
                });
        })
    );
}
/*********** Update Account Type ************/
export function updateAccountType(payload) {
    return dispatch => (
        new Promise((resolve, reject) => {
            dispatch(loader(true));
            Http.put(`${process.env.REACT_APP_URL}/editAccountType`, payload)
                .then((res) => {
                    dispatch(loader(false));
                    toastAction(true, res.data.message);
                    return resolve(true);
                })
                .catch((err) => {
                    const { status, errors } = err.response.data;
                    const data = {
                        status,
                        errors,
                    };
                    dispatch(loader(false));
                    toastAction(false, errors);
                    return reject(false);
                });
        })
    );
}
/*********** Get Account type list **************/
export function accountTypeList(params = {}) {
    const query = querystring.stringify(params);
    const url = query ? `${process.env.REACT_APP_URL}/getAccountsType?${query}` : `${process.env.REACT_APP_URL}/getAccountsType`;
    return dispatch => (
        new Promise((resolve, reject) => {
            dispatch(loader(true));
            Http.get(url)
                .then((res) => {
                    dispatch(action.getAccountTypes({ list: res.data.returnObject, total_rows: res.data.total_rows, size: res.data.size }));
                    dispatch(loader(false));
                    return resolve();
                })
                .catch((err) => {
                    const { status, errors } = err.response.data;
                    const data = {
                        status,
                        errors,
                    };
                    dispatch(loader(false));
                    return reject(data);
                });
        })
    );
}
/*********** Get Account type delete **************/
export function accountTypeDelete(id) {
    return dispatch => (
        new Promise((resolve, reject) => {
            dispatch(loader(true));
            Http.delete(`${process.env.REACT_APP_URL}/deleteAccountType/${id}`)
                .then(() => {
                    dispatch(loader(false));
                    return resolve();
                })
                .catch((err) => {
                    const { status, errors } = err.response.data;
                    const data = {
                        status,
                        errors,
                    };
                    dispatch(loader(false));
                    return reject(data);
                });
        })
    );
}
/*********** Add Accounts **************/
export function addAccount(payload) {
    return dispatch => (
        new Promise((resolve, reject) => {
            dispatch(loader(true));
            Http.post(`${process.env.REACT_APP_URL}/saveAccount`, payload)
                .then((res) => {
                    dispatch(loader(false));
                    toastAction(true, res.data.message);
                    return resolve(true);
                })
                .catch((err) => {
                    const { status, errors } = err.response.data;
                    const data = {
                        status,
                        errors,
                    };
                    dispatch(loader(false));
                    toastAction(false, errors);
                    return reject(false);
                });
        })
    );
}
/*********** Add Accounts **************/
export function editAccount(payload) {
    return dispatch => (
        new Promise((resolve, reject) => {
            dispatch(loader(true));
            Http.put(`${process.env.REACT_APP_URL}/editAccount`, payload)
                .then((res) => {
                    dispatch(loader(false));
                    toastAction(true, res.data.message);
                    return resolve(true);
                })
                .catch((err) => {
                    const { status, errors } = err.response.data;
                    const data = {
                        status,
                        errors,
                    };
                    dispatch(loader(false));
                    toastAction(false, errors);
                    return reject(false);
                });
        })
    );
}
/*********** Get Account type list **************/
export function accountsList(params = {}) {
    const query = querystring.stringify(params);
    const url = query ? `${process.env.REACT_APP_URL}/listAccount?${query}` : `${process.env.REACT_APP_URL}/listAccount`;
    return dispatch => (
        new Promise((resolve, reject) => {
            dispatch(loader(true));
            Http.get(url)
                .then((res) => {
                    dispatch(action.getAccounts({ list: res.data.returnObject, total_rows: res.data.total_rows, size: res.data.size }));
                    dispatch(loader(false));
                    return resolve();
                })
                .catch((err) => {
                    const { status, errors } = err.response.data;
                    const data = {
                        status,
                        errors,
                    };
                    dispatch(loader(false));
                    return reject(data);
                });
        })
    );
}
/*********** Get Account delete **************/
export function accountDelete(id) {
    return dispatch => (
        new Promise((resolve, reject) => {
            dispatch(loader(true));
            Http.delete(`${process.env.REACT_APP_URL}/deleteAccount/${id}`)
                .then(() => {
                    dispatch(loader(false));
                    return resolve();
                })
                .catch((err) => {
                    const { status, errors } = err.response.data;
                    const data = {
                        status,
                        errors,
                    };
                    dispatch(loader(false));
                    return reject(data);
                });
        })
    );
}