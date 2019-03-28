import { ReactNode } from 'react';
import { Action, AnyAction, Dispatch } from 'redux';
import { StateType } from 'typesafe-actions';

import rootReducer from '../redux/reducer';
import {AppState, AppAction} from '../redux/reducers/app'
import { HomeAction, HomeState } from '../redux/reducers/home';


declare module 'Types' {
  export interface RootState {
    readonly app: AppState;
    readonly home: HomeState;
  }

  export type RootAction = AppAction| HomeAction;

  export interface ConnectedReduxProps<A extends Action = AnyAction> {
    dispatch: Dispatch<A>
  }
}