import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Link } from 'react-router-dom';

import Types from 'Types';

import { BUTTON_CLICK } from '../../redux/actions/actionTypes';
import { ExternalLinkButton } from '../../components/ExternalLinkButton';
import { Heading } from '../../components/Heading';
import styles from './home.scss';
import { buttonClick } from '../../redux/actions/home';


interface HomeProps {
  appLoaded: boolean;
  buttonClicks: number;
  onButtonClick: () => null;
}

let HomePage = (props: HomeProps) => {
  let buttonClickHandler = () => {
		props.onButtonClick();
  }

  return (
    <div className={ styles.home }>
      <Heading className={ styles.homeHeading }
                text={ "Jamal's React Template " + (props.appLoaded ? "Has Loaded!" : "") } />
      <ExternalLinkButton className={ styles.homeButton }
                          href="https://reactjs.org/docs/getting-started.html"
                          text="View React Docs"
                          onClick={ buttonClickHandler } />
      <ExternalLinkButton className={ styles.homeButton }
                          href="https://webpack.js.org/concepts"
                          text="View Webpack Docs"
                          onClick={ buttonClickHandler } />
      <Link to="/example">Go To Example Page</Link>
      <div className={ styles.buttonClicks }>
        { props.buttonClicks === 1
            ? "1 Button Click"
            : props.buttonClicks + " Button Clicks" }
      </div>
    </div>
  )
};

const mapStateToProps = (state: Types.RootState) => {
  return {
    appLoaded: state.app.appLoaded,
    buttonClicks: state.home.buttonClicks,
  }
};

const mapDispatchToProps = (dispatch: Dispatch<Types.RootAction>) => {
	return {
		onButtonClick: () => dispatch(buttonClick())
	}
}

export const Home = connect(mapStateToProps, mapDispatchToProps)(HomePage);