import { Action } from '@ngrx/store';
import { RegisterJobSeekerRequest } from 'src/app/core/data-models/RegisterAuthRequest/register_auth_request';
import { UserAuthData } from 'src/app/core/data-models/UserAuthorization';
import { LoadingAction } from 'src/app/modules/loading';

export const LOGIN_JOB_SEEKER = 'LOGIN_JOB_SEEKER';
export const LOGIN_JOB_SEEKER_SUCCESS = 'LOGIN_JOB_SEEKER SUCCESS';
export const LOGIN_JOB_SEEKER_FAIL = 'LOGIN_JOB_SEEKER FAIL';

export class LoginJobSeeker implements Action, LoadingAction {
  jobPortalLoading = { add: LOGIN_JOB_SEEKER };
  readonly type = LOGIN_JOB_SEEKER;
  constructor(
    public authData: { email: string; password: string },
    public shouldRedirect: boolean
  ) {}
}

export class LoginJobSeekerSuccess implements Action, LoadingAction {
  jobPortalLoading = { remove: LOGIN_JOB_SEEKER };

  readonly type = LOGIN_JOB_SEEKER_SUCCESS;
  constructor(public payload: UserAuthData, public shouldRedirect: boolean) {}
}

export class LoginJobSeekerFail implements Action, LoadingAction {
  jobPortalLoading = { remove: LOGIN_JOB_SEEKER };

  readonly type = LOGIN_JOB_SEEKER_FAIL;
  constructor(public payload: any) {}
}

export const REGISTER_JOB_SEEKER = 'REGISTER_JOB_SEEKER';
export const REGISTER_JOB_SEEKER_SUCCESS = 'REGISTER_JOB_SEEKER SUCCESS';
export const REGISTER_JOB_SEEKER_FAIL = 'REGISTER_JOB_SEEKER FAIL';

export class RegisterJobSeeker implements Action, LoadingAction {
  jobPortalLoading = { add: REGISTER_JOB_SEEKER };
  readonly type = REGISTER_JOB_SEEKER;
  constructor() {}
}

export class RegisterJobSeekerSuccess implements Action, LoadingAction {
  jobPortalLoading = { remove: REGISTER_JOB_SEEKER };

  readonly type = REGISTER_JOB_SEEKER_SUCCESS;
  constructor(public payload: UserAuthData) {}
}

export class RegisterJobSeekerFail implements Action, LoadingAction {
  jobPortalLoading = { remove: REGISTER_JOB_SEEKER };

  readonly type = REGISTER_JOB_SEEKER_FAIL;
  constructor(public payload: any) {}
}


export const REFRESH_JOB_SEEKER_TOKEN = "REFRESH_JOB_SEEKER_TOKEN"
export const REFRESH_JOB_SEEKER_TOKEN_SUCCESS = "REFRESH_JOB_SEEKER_TOKEN SUCCESS"
export const REFRESH_JOB_SEEKER_TOKEN_FAIL = "REFRESH_JOB_SEEKER_TOKEN FAIL"

export class RefreshJobSeekerToken implements Action,LoadingAction {
  jobPortalLoading = {add : REFRESH_JOB_SEEKER_TOKEN}
  readonly type = REFRESH_JOB_SEEKER_TOKEN;
  constructor(public accessToken:string) { }
}

export class RefreshJobSeekerTokenSuccess implements Action,LoadingAction {
  jobPortalLoading = {remove : REFRESH_JOB_SEEKER_TOKEN}

  readonly type = REFRESH_JOB_SEEKER_TOKEN_SUCCESS;
  constructor(public payload: UserAuthData) { }
}

export class RefreshJobSeekerTokenFail implements Action,LoadingAction {
  jobPortalLoading = {remove : REFRESH_JOB_SEEKER_TOKEN}

  readonly type = REFRESH_JOB_SEEKER_TOKEN_FAIL;
  constructor(public payload: any) { }
}


export type JobSeekerAuthActions =
  | LoginJobSeeker
  | LoginJobSeekerSuccess
  | LoginJobSeekerFail
  |RefreshJobSeekerToken
  |RefreshJobSeekerTokenFail
  |RefreshJobSeekerTokenSuccess
  | RegisterJobSeeker
  | RegisterJobSeekerFail
  | RegisterJobSeekerSuccess;
