import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import UserPageTemplate from 'templates/UserPageTemplate';
import Workout from 'views/User/Workout';

const UserPage = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/user" render={() => <Redirect to="/user/workout" />} />
      <Route path="/user/workout" component={Workout} />
    </Switch>
  </BrowserRouter>
);
export default UserPage;
