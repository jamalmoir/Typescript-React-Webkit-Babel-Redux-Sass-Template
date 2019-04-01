import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Link } from 'react-router-dom';

import Types from 'Types';

import { BUTTON_CLICK } from '../../redux/actions/actionTypes';
import { ExternalLinkButton } from '../../components/ExternalLinkButton';
import { Heading } from '../../components/Heading';
import styles from './home.scss';


interface HomeProps {
  appLoaded: boolean;
  buttonClicks: number;
  onButtonClick: () => null;
}

class HomePage extends React.Component<HomeProps> {
  buttonClickHandler = () => {
		this.props.onButtonClick();
  }

  render () {
    return (
      <div className={ styles.home }>
        <Heading className={ styles.homeHeading }
                 text={ "Jamal's React Template " + (this.props.appLoaded ? "Has Loaded!" : "") } />
        <ExternalLinkButton className={ styles.homeButton }
                            href="https://reactjs.org/docs/getting-started.html"
                            text="View React Docs"
                            onClick={ this.buttonClickHandler } />
        <ExternalLinkButton className={ styles.homeButton }
                            href="https://webpack.js.org/concepts"
                            text="View Webpack Docs"
                            onClick={ this.buttonClickHandler } />
        <Link to="/example">Go To Example Page</Link>
        <div className={ styles.buttonClicks }>
          { this.props.buttonClicks === 1
              ? '1 Button Click'
              : this.props.buttonClicks + ' Button Clicks' }
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

export let Home = connect(mapStateToProps, mapDispatchToProps)(HomePage);