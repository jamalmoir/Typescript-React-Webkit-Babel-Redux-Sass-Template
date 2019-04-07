import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { Dispatch } from 'redux';

import Types from 'Types'

import styles from './app.scss';

import { AppAction } from '../../redux/reducers/app'
import { APP_LOAD } from '../../redux/actions/actionTypes';
import { Home } from '../home';
import { Login } from '../login';
import { Example } from '../example';
import { ProtectedRoute } from '../../components/ProtectedRoute';


const mapStateToProps = (state: Types.RootState) => {
  return {
    appLoaded: state.app.appLoaded,
  }};

const mapDispatchToProps = (dispatch: Dispatch<AppAction>) => ({
  onLoad: () => dispatch({ type: APP_LOAD }),
});

interface AppProps {
  onLoad: () => null;
  appLoaded: boolean;
}

const content = (
    <Switch>
      <ProtectedRoute exact path="/" component={ Home }/>
      <Route exact path="/login" component={ Login }/>
      <ProtectedRoute exact path="/example" component={ Example }/>
    </Switch>
)

class AppPage extends React.Component<AppProps> {
  componentDidMount() {
    this.props.onLoad();
  }

  render () {
    return (
      <div className={ styles.app }>
        { this.props.appLoaded ? content: "" }
      </div>
    )
  };
};

export const App = connect(mapStateToProps, mapDispatchToProps)(AppPage);