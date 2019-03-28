import React from "react";
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { Dispatch } from 'redux';

import Types from 'Types'

import "./app.scss";

import { AppAction } from '../../redux/reducers/app'
import { APP_LOAD } from '../../redux/actions/actionTypes';
import { Home } from '../home';


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
      <Route exact path="/" component={ Home }/>
    </Switch>
)


class App extends React.Component<AppProps> {
  componentDidMount() {
    this.props.onLoad();
  }

  render () {
    return (
      <div className="app">
        { this.props.appLoaded ? content: ""}
      </div>
    )
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);