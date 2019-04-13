import React, { Component, ChangeEvent, Dispatch } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { goBack, GoBack, push, Push } from 'connected-react-router';

import Types from 'Types';

import styles from './login.scss';
import { StandardButton } from '../../components/StandardButton';
import { TextInput } from '../../components/TextInput';
import { authenticateUser } from '../../redux/actions/auth';
import { validate } from '../../utils/validation'


interface LoginState {
  controls : {
    [key: string]: {
      value: string
      errors: string[],
      touched: boolean,
      validationRules: {
        [key: string]: any,
      }
    }
  }
}

interface LoginProps {
  onLogin: (authData: {email: string, password: string}) => null;
  goBack: GoBack;
  push: Push;
}

class LoginPage extends Component<LoginProps> {
  state: LoginState = {
    controls: {
      email: {
        value: '',
        errors: [],
        touched: false,
        validationRules: {
          isEmail: true,
        }
      },
      password: {
        value: '',
        errors: [],
        touched: false,
        validationRules: {
          minLength: 6,
        }
      }
    }
  }

  updateInputState(key: string, event: ChangeEvent<HTMLInputElement>) {
    let text = event.target.value;
    let connectedValue = {};

    // equalTo rule requires a connectedValue to be compared to.
    if (this.state.controls[key].validationRules.equalTo) {
			const equalControl = this.state.controls[key].validationRules.equalTo;
      const equalValue = this.state.controls[equalControl].value;

			connectedValue = {
				...connectedValue,
				equalTo: equalValue
			};
		}

    this.setState((prevState: LoginState) => {
      return {
        controls: {
          ...prevState.controls,
          [key]: {
            ...prevState.controls[key],
            value: text,
            errors: validate(text, this.state.controls[key].validationRules, connectedValue),
            touched: true
          }
        }
      }
    })
  }

  loginHandler = () => {
    const authData = {
      email: this.state.controls.email.value,
      password: this.state.controls.password.value
    }

    try {
      // TODO: await realLoginLogic();
      this.props.onLogin(authData);
      this.props.goBack();
    } catch (e) {
      // TODO: warn user;
    }
  }

  render() {
    return (
      <div className={ styles.login }>
        <div className={ styles.loginForm }>
          <h4>Login</h4>
          <div className={ styles.inputs }>
            <TextInput type="email"
                       placeholder="email"
                       value={ this.state.controls.email.value }
                       errors={ this.state.controls.email.errors.length && this.state.controls.email.touched }
                       onChange={ (event: ChangeEvent<HTMLInputElement>) => this.updateInputState('email', event) } />
            <TextInput type="password"
                       placeholder="password"
                       value={ this.state.controls.password.value }
                       errors={ this.state.controls.password.errors.length && this.state.controls.password.touched }
                       onChange ={(event: ChangeEvent<HTMLInputElement>) => this.updateInputState('password', event) } />
            <StandardButton text="login" onClick={ this.loginHandler } />
          </div>
          <div className={ styles.registerText }>
            Don't have an account? <Link to="">Register</Link>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch: Dispatch<Types.RootAction>) => {
  return {
    onLogin: (authData: {email: string, password: string}) => dispatch(authenticateUser(authData)),
    goBack: () => dispatch(push('/')) // TODO: get goBack() working
  }
}

export const Login = connect(null, mapDispatchToProps)(LoginPage);