import { ActionType } from 'typesafe-actions';

import { BUTTON_CLICK } from '../actions/actionTypes';
import * as actions from '../actions/home';


export interface HomeState {
  buttonClicks: number;
}

export type HomeAction = ActionType<typeof actions>

const initialState: HomeState = {
  buttonClicks: 0,
};

const reducer = (state = initialState, action: HomeAction) => {
  switch (action.type) {
    case BUTTON_CLICK:
      return <HomeState>{
        ...state,
        buttonClicks: state.buttonClicks + 1
      }
    default:
      return state;
  }
}

export default reducer;