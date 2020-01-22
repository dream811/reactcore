import React, { Component } from 'react';
import { BrowserRouter , HashRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import store from './store';
import * as action from './store/actions';
// import { renderRoutes } from 'react-router-config';
import './App.scss';

const loading = () => <div className="animated fadeIn pt-3 text-center"><div className="sk-spinner sk-spinner-pulse"></div></div>;

// Containers
// const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));
const DefaultLayout = React.lazy(() => import('./Modules/Common/DefaultLayout'));

// Pages
// const Login = React.lazy(() => import('./views/Pages/Login'));
const Login = React.lazy(() => import('./Modules/Auth/Login'));
const Register = React.lazy(() => import('./Modules/Auth/Register'));
// const Register = React.lazy(() => import('./views/Pages/Register'));
const Page404 = React.lazy(() => import('./views/Pages/Page404'));
const Page500 = React.lazy(() => import('./views/Pages/Page500'));

store.dispatch(action.authCheck());

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
        <ToastContainer />
            <React.Suspense fallback={loading()}>
              <Switch>
                <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
                <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
                <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
                <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
                <Route auth="true" path="/" name="Home" render={props => <DefaultLayout {...props}/>} />
              </Switch>
            </React.Suspense>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
