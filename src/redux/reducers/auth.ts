import { ActionType } from 'typesafe-actions';

import { USER_AUTH } from '../actions/actionTypes';
import * as actions from '../actions/auth';


export interface AuthState {
  isAuthed: boolean;
  user: {
    email: string;
  }
}

export type AuthAction = ActionType<typeof actions>

export interface AuthUser {
  email: string;
}

const initialState: AuthState = {
  isAuthed: false,
  user: null
};

const reducer = (state = initialState, action: AuthAction) => {
  switch (action.type) {
    case USER_AUTH:
      return <AuthState>{
        ...state,
        isAuthed: true,
        user: action.payload
      }
    default:
      return state;
  }
}

export default reducer;