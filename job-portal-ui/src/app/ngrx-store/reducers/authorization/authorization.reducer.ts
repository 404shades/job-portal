import { UserAuthData } from 'src/app/core/data-models/UserAuthorization';
import {
  JobSeekerAuthActions,
  LOGIN_JOB_SEEKER_SUCCESS,
  LOGIN_RECRUITER_SUCCESS,
  RecruiterAuthActions,
} from '../../actions/authorization';

export interface UserProfileState {
  user: UserAuthData | undefined;
  loggedIn: boolean;
  errorMessage: string;
  hasError: boolean;
}
const initialState: UserProfileState = {
  user: undefined,
  loggedIn: false,
  hasError: false,
  errorMessage: '',
};

export function authReducer(
  state = initialState,
  action: RecruiterAuthActions | JobSeekerAuthActions
): UserProfileState {
  switch (action.type) {
    case LOGIN_RECRUITER_SUCCESS:
      return { ...state, user: action.payload };
    case LOGIN_JOB_SEEKER_SUCCESS:
      return { ...state, user: action.payload };

    default:
      return state;
  }
}

export const selectUser = (state: UserProfileState) => state.user;
