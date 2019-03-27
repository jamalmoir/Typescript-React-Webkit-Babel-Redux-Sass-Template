import React from "react";

import "./home.scss";


class Home extends React.Component {
  render () {
    return (
      <div className="container">
        <div>
          <h1>Jamal's Typescript, React, Webpack, Babel, Redux and Sass Template</h1>
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

export default Home;
