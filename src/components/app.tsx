import React from "react";
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { Dispatch } from 'redux';

import { AppState, AppAction } from '../redux/reducers/app'
import { APP_LOAD } from '../redux/actions/actionTypes';
import Home from './Home/index';


const mapStateToProps = (state: AppState) => {
  return {
    appLoaded: state.appLoaded,
  }};

const mapDispatchToProps = (dispatch: Dispatch<AppAction>) => ({
  onLoad: () => dispatch({ type: APP_LOAD }),
});

interface AppProps {
  onLoad: () => null;
}

class App extends React.Component<AppProps> {
  componentDidMount() {
    this.props.onLoad();
  }

  render () {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={ Home }/>
        </Switch>
      </div>
    )
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);