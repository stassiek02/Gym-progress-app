import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import Workout from 'views/Workout';

const Root = () => (
  <BrowserRouter>
    <MainTemplate>
      <Switch>
        <Route exact path="/" component={Workout} />
      </Switch>
    </MainTemplate>
  </BrowserRouter>
);

export default Root;
