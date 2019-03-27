import React from "react";
import { connect } from 'react-redux';

import Types from 'Types';
import "./home.scss";


interface HomeProps {
  appLoaded: boolean;
}

const mapStateToProps = (state: Types.RootState) => {
  return {
    appLoaded: state.app.appLoaded,
  }
};

class Home extends React.Component<HomeProps> {
  render () {
    return (
      <div className="container">
        <div>
          <h1>Jamal's Typescript, React, Webpack, Babel, Redux and Sass Template { this.props.appLoaded ? "Has Loaded!" : "" }</h1>
          <a className="button"
            href="https://reactjs.org/docs/getting-started.html"
            target="_blank"
          >
            View React Docs
          </a>
          <a className="button"
            href="https://webpack.js.org/concepts"
            target="_blank"
          >
            View Webpack Docs
          </a>
        </div>
      </div>
    )
  };
};

export default connect(mapStateToProps)(Home);