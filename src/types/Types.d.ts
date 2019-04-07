import { ReactNode } from 'react';
import { Action, AnyAction, Dispatch } from 'redux';
import { StateType } from 'typesafe-actions';

import rootReducer from '../redux/reducer';
import {AppState, AppAction} from '../redux/reducers/app'
import { AuthState, AuthAction } from '../redux/reducers/auth';
import { HomeState, HomeAction } from '../redux/reducers/home';
import { CallHistoryMethodAction } from 'connected-react-router';


declare module 'Types' {
  export interface RootState {
    readonly app: AppState;
    readonly auth: AuthState;
    readonly home: HomeState;
  }

  export type RootAction = AppAction | AuthAction | HomeAction | CallHistoryMethodAction;

  export interface ConnectedReduxProps<A extends Action = AnyAction> {
    dispatch: Dispatch<A>
  }
}