import React from 'react';
import { Provider } from 'react-redux';
import {persistor, configureStore} from 'store';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import Workout from 'views/Workout';
import LoginPage from 'views/LoginPage';
import RegisterPage from 'views/RegisterPage';
import { PersistGate } from 'redux-persist/integration/react'
import { routes } from 'routes';
import PrivateRoute from 'routes/privateRoute';

const Root = () => (
  <Provider store={configureStore}>
  <PersistGate loading={null} persistor={persistor}>
    <BrowserRouter>
      <MainTemplate>
        <Switch>
          <Route exact path={routes.home} component={LoginPage} />
          <Route exact path={routes.register} component={RegisterPage} />
          <Route exact path={routes.login} component={LoginPage} />
          <PrivateRoute exact path={routes.workout} component={Workout} />
        </Switch>
      </MainTemplate>
    </BrowserRouter>
    </PersistGate>
  </Provider>
);

export default Root;
