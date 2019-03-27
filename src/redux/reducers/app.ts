import { ActionType } from 'typesafe-actions';

import { APP_LOAD } from '../actions/actionTypes';
import * as actions from '../actions/app';


export interface AppState {
  appLoaded: boolean;
}

export type AppAction = ActionType<typeof actions>

const initialState: AppState = {
  appLoaded: false,
};

const reducer = (state = initialState, action: AppAction) => {
  switch (action.type) {
    case APP_LOAD:
      return <AppState>{
        ...state,
        appLoaded: true
      }
    default:
      return state;
  }
}

export default reducer;