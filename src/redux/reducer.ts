import app from './reducers/app';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import { History } from 'history'

export default (history: History) => combineReducers({
  app,
  router: connectRouter(history)
});