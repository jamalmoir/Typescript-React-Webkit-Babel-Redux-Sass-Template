import React, { Dispatch } from 'react';

import Types from 'Types';

import styles from './login.scss';
import { Link } from 'react-router-dom';

export let Login = () => {
  return (
    <div className={ styles.login }>
      <div className={ styles.loginForm }>
        <h4>Login</h4>
        <div className={ styles.inputs }>
          <input type="email" name="email" placeholder="email" required></input>
          <input type="password" name="password" placeholder="password" required></input>
          <button>Login</button>
        </div>
        <div className={ styles.registerText }>
          Don't have an account? <Link to="">Register</Link>
        </div>
      </div>
    </div>
  )
}