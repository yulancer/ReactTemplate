import React, { Component } from 'react';
// import { Route } from 'react-router';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import AuthorizeRoute from './components/api-authorization/AuthorizeRoute';
import ApiAuthorizationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { ApplicationPaths } from './components/api-authorization/ApiAuthorizationConstants';

import './custom.css'
import './App.scss';


const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));

// Pages
const Login = React.lazy(() => import('./views/Pages/Login'));
const Register = React.lazy(() => import('./views/Pages/Register'));
const Page404 = React.lazy(() => import('./views/Pages/Page404'));
const Page500 = React.lazy(() => import('./views/Pages/Page500'));

export default class App extends Component {
  static displayName = App.name;

  render () {
      return (
          <HashRouter>
              <React.Suspense fallback={loading()}>
                  <Switch>
                      <Route exact path="/login" name="Login Page" render={props => <Login {...props} />} />
                      <Route exact path="/register" name="Register Page" render={props => <Register {...props} />} />
                      <Route exact path="/404" name="Page 404" render={props => <Page404 {...props} />} />
                      <Route exact path="/500" name="Page 500" render={props => <Page500 {...props} />} />
                      <Route path="/" name="Home" render={props => <DefaultLayout {...props} />} />
                  </Switch>
              </React.Suspense>
          </HashRouter>
      // <Layout>
      //  <Route exact path='/' component={Home} />
      //  <Route path='/counter' component={Counter} />
      //  <AuthorizeRoute path='/fetch-data' component={FetchData} />
      //  <Route path={ApplicationPaths.ApiAuthorizationPrefix} component={ApiAuthorizationRoutes} />
      // </Layout>
    );
  }
}
