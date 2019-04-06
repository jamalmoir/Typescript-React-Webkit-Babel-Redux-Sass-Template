import app from './reducers/app';
import auth from './reducers/auth';
import home from './reducers/home';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import { History } from 'history'

export default (history: History) => combineReducers({
  app,
  auth,
  home,
  router: connectRouter(history)
});