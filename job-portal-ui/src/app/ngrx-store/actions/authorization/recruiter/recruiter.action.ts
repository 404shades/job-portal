import { Action } from '@ngrx/store';
import { RegisterRecruiterRequest } from 'src/app/core/data-models/RegisterAuthRequest/register_recruiter_request';
import { UserAuthData } from 'src/app/core/data-models/UserAuthorization';
import { LoadingAction } from 'src/app/modules/loading';
import { RegisterJobSeeker } from '../job_seeker';

export const LOGIN_RECRUITER = 'LOGIN_RECRUITER';
export const LOGIN_RECRUITER_SUCCESS = 'LOGIN_RECRUITER SUCCESS';
export const LOGIN_RECRUITER_FAIL = 'LOGIN_RECRUITER FAIL';

export class LoginRecruiter implements Action, LoadingAction {
  jobPortalLoading = { add: LOGIN_RECRUITER };
  readonly type = LOGIN_RECRUITER;
  constructor(
    public authData: { email: string; password: string },
    public shouldRedirect: boolean
  ) {}
}

export class LoginRecruiterSuccess implements Action, LoadingAction {
  jobPortalLoading = { remove: LOGIN_RECRUITER };

  readonly type = LOGIN_RECRUITER_SUCCESS;
  constructor(public payload: UserAuthData, public shouldRedirect: boolean) {}
}

export class LoginRecruiterFail implements Action, LoadingAction {
  jobPortalLoading = { remove: LOGIN_RECRUITER };

  readonly type = LOGIN_RECRUITER_FAIL;
  constructor(public payload: string) {}
}

export const REGISTER_RECRUITER = 'REGISTER_RECRUITER';
export const REGISTER_RECRUITER_SUCCESS = 'REGISTER_RECRUITER SUCCESS';
export const REGISTER_RECRUITER_FAIL = 'REGISTER_RECRUITER FAIL';

export class RegisterRecruiter implements Action, LoadingAction {
  jobPortalLoading = { add: REGISTER_RECRUITER };

  readonly type = REGISTER_RECRUITER;
  constructor() {}
}

export class RegisterRecruiterSuccess implements Action, LoadingAction {
  jobPortalLoading = { remove: REGISTER_RECRUITER };

  readonly type = REGISTER_RECRUITER_SUCCESS;
  constructor(public payload: UserAuthData) {}
}

export class RegisterRecruiterFail implements Action, LoadingAction {
  jobPortalLoading = { remove: REGISTER_RECRUITER };

  readonly type = REGISTER_RECRUITER_FAIL;
  constructor(public payload: any) {}
}

export const REFRESH_RECRUITER_TOKEN = 'REFRESH_RECRUITER_TOKEN';
export const REFRESH_RECRUITER_TOKEN_SUCCESS =
  'REFRESH_RECRUITER_TOKEN SUCCESS';
export const REFRESH_RECRUITER_TOKEN_FAIL = 'REFRESH_RECRUITER_TOKEN FAIL';

export class RefreshRecruiterToken implements Action, LoadingAction {
  jobPortalLoading = { add: REFRESH_RECRUITER_TOKEN };
  readonly type = REFRESH_RECRUITER_TOKEN;
  constructor(public accessToken:string) {}
}

export class RefreshRecruiterTokenSuccess implements Action, LoadingAction {
  jobPortalLoading = { remove: REFRESH_RECRUITER_TOKEN };

  readonly type = REFRESH_RECRUITER_TOKEN_SUCCESS;
  constructor(public payload: UserAuthData) {}
}

export class RefreshRecruiterTokenFail implements Action, LoadingAction {
  jobPortalLoading = { remove: REFRESH_RECRUITER_TOKEN };
  readonly type = REFRESH_RECRUITER_TOKEN_FAIL;
  constructor(public payload: any) {}
}

export type RecruiterAuthActions =
  | LoginRecruiter
  | LoginRecruiterSuccess
  | RefreshRecruiterTokenSuccess
  | RefreshRecruiterTokenFail
  | RefreshRecruiterToken
  | LoginRecruiterFail
  | RegisterRecruiterSuccess
  | RegisterRecruiterFail
  | RegisterJobSeeker;
