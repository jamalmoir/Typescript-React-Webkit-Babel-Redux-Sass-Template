import { USER_AUTH } from './actionTypes';
import { AuthUser } from '../reducers/auth';
import { action } from 'typesafe-actions';

export const authenticateUser = (user: AuthUser) => action(USER_AUTH, user);
