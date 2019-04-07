import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import Types from 'Types';

type RouteProps = React.ComponentProps<typeof Route>;

interface ProtectedRouteProps extends RouteProps {
  isAuthed: boolean;
}

let protectedRoute = ({component: Component, isAuthed, ...rest}: ProtectedRouteProps) => {
  return (
    <Route
      { ...rest }
      render={
        (props) => isAuthed
          ? <Component { ...props } />
          : <Redirect to={ {pathname: '/login', state: {from: props.location}} } />
      }
    />
  )
}

const mapStateToProps = (state: Types.RootState) => {
  return {
    isAuthed: state.auth.isAuthed,
  }
}

export const ProtectedRoute = connect(mapStateToProps)(protectedRoute);