import React from "react";
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import Types from 'Types';
import { BUTTON_CLICK } from "../../redux/actions/actionTypes";
import "./home.scss";


interface HomeProps {
  appLoaded: boolean;
  buttonClicks: number;
  onButtonClick: () => null;
}

class Home extends React.Component<HomeProps> {
  buttonClickHandler = () => {
		this.props.onButtonClick();
  }

  render () {
    return (
      <div className="Home">
        <div>
          <h1>Jamal's React Template { this.props.appLoaded ? "Has Loaded!" : "" }</h1>
          <a className="button"
            href="https://reactjs.org/docs/getting-started.html"
            target="_blank"
            onClick={this.buttonClickHandler}
          >
            View React Docs
          </a>
          <a className="button"
            href="https://webpack.js.org/concepts"
            target="_blank"
            onClick={this.buttonClickHandler}
          >
            View Webpack Docs
          </a>
          <div className="button-clicks">{this.props.buttonClicks === 1 ? '1 Button Click' : this.props.buttonClicks + ' Button Clicks'}</div>
        </div>
      </div>
    )
  };
};

const mapStateToProps = (state: Types.RootState) => {
  return {
    appLoaded: state.app.appLoaded,
    buttonClicks: state.home.buttonClicks,
  }
};

const mapDispatchToProps = (dispatch: Dispatch<Types.RootAction>) => {
	return {
		onButtonClick: () => dispatch({type: BUTTON_CLICK})
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);