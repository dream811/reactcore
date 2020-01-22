import { combineReducers } from 'redux';
import Auth from './Auth';
import persistStore from './persistStore';
import loader from './loader';
import accounting from './accounting';

const RootReducer = combineReducers({ Auth, persistStore, loader, accounting });

export default RootReducer;
