import { BUTTON_CLICK } from './actionTypes';
import { action } from 'typesafe-actions';

export const buttonClick = () => action(BUTTON_CLICK);
