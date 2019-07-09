import React from 'react';
import { Provider } from 'react-redux';
import store from 'store';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import Workout from 'views/Workout';

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainTemplate>
        <Switch>
          <Route exact path="/" component={Workout} />
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  </Provider>
);

export default Root;
