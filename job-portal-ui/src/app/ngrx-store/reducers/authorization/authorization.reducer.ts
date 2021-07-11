import { UserAuthData } from 'src/app/core/data-models/UserAuthorization';
import {
  JobSeekerAuthActions,
  LOGIN_JOB_SEEKER_SUCCESS,
  LOGIN_RECRUITER_SUCCESS,
  RecruiterAuthActions,
  REFRESH_JOB_SEEKER_TOKEN_FAIL,
  REFRESH_JOB_SEEKER_TOKEN_SUCCESS,
  REFRESH_RECRUITER_TOKEN,
  REFRESH_RECRUITER_TOKEN_SUCCESS,
  REGISTER_JOB_SEEKER_SUCCESS,
  REGISTER_RECRUITER_SUCCESS,
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
      return { ...state, user: action.payload,loggedIn:true };
    case LOGIN_JOB_SEEKER_SUCCESS:
      return { ...state, user: action.payload,loggedIn:true };
    case REGISTER_RECRUITER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loggedIn:true
      };
    case REGISTER_JOB_SEEKER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loggedIn:true
      };

      case REFRESH_JOB_SEEKER_TOKEN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loggedIn:true
      };

      case REFRESH_RECRUITER_TOKEN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loggedIn:true
      };

    default:
      return state;
  }
}

export const selectUser = (state: UserProfileState) => state.user;
export const selectLoggedInStatus = (state:UserProfileState)=>state.loggedIn;
export const selectRecruiterStatus = (state:UserProfileState)=>state.user?.isRecruiter
