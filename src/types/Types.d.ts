import { ReactNode } from 'react';
import { Action, AnyAction, Dispatch } from 'redux';
import { StateType } from 'typesafe-actions';

import rootReducer from '../redux/reducer';
import {AppState, AppAction} from '../redux/reducers/app'


declare module 'Types' {
  export interface RootState {
    readonly app: AppState;
  }

  export type RootAction = AppAction;// | SomeOtherAction;

  export interface ConnectedReduxProps<A extends Action = AnyAction> {
    dispatch: Dispatch<A>
  }
}