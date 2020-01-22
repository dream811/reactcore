import { applyMiddleware, createStore, compose } from 'redux';
import { persistStore } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import RootReducer from './reducers';

const store = createStore(
  RootReducer,
  process.env.NODE_ENV === 'production' ? compose(applyMiddleware(ReduxThunk)) : composeWithDevTools(applyMiddleware(ReduxThunk)),
);

persistStore(store);

export default store;
