import React from "react";
import "./app.scss";

const App = () => {
  return (
    <div className="container">
      <div>
        <h1>Jamal's React, Webpack, Babel Template</h1>
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
  );
};

export default App;
