import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect,} from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component,authenticated, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      authenticated === true ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

const mapStateToProps = ({ authReducer }) => {
  const {authenticated} = authReducer;
  return {authenticated};
};

PrivateRoute.propTypes={
    component:PropTypes.element.isRequired,
    authenticated:PropTypes.bool,
}
PrivateRoute.defaultProps ={
    authenticated:false,
}

export default connect(mapStateToProps,null)(PrivateRoute)