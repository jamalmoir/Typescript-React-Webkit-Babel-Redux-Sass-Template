import React, { Dispatch } from 'react';

import Types from 'Types';

import styles from './login.scss';

export let Login = () => {
  return (
    <div className={ styles.home }>
      <div className={ styles.loginForm }>
        <h4>Login</h4>
        <div className={ styles.inputs }>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="Please enter your email" required></input>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" placeholder="password" required></input>
          <button>Login</button>
        </div>
      </div>
    </div>
  )
}