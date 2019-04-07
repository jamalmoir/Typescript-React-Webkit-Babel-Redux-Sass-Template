import { applyMiddleware, createStore, compose } from 'redux';
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history';

import createRootReducer from './reducer';

export const history = createBrowserHistory();

const middleware = routerMiddleware(history);
const composedMiddleware = process.env.NODE_ENV === 'production'
                          ? compose(applyMiddleware(middleware))
                          : composeWithDevTools(applyMiddleware(middleware, createLogger()));

export const store = createStore(createRootReducer(history), composedMiddleware);