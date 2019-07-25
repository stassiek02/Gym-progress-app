import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'store';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import Workout from 'views/Workout';
import LoginPage from 'views/LoginPage';
import RegisterPage from 'views/RegisterPage';

const Root = () => (
  <Provider store={configureStore}>
    <BrowserRouter>
      <MainTemplate>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/workout" component={Workout} />
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  </Provider>
);

export default Root;
