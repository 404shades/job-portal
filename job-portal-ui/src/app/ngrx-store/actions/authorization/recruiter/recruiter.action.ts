import { Action } from '@ngrx/store';
import { UserAuthData } from 'src/app/core/data-models/UserAuthorization';
import { RegisterJobSeeker } from '../job_seeker';

export const LOGIN_RECRUITER = 'LOGIN_RECRUITER';
export const LOGIN_RECRUITER_SUCCESS = 'LOGIN_RECRUITER SUCCESS';
export const LOGIN_RECRUITER_FAIL = 'LOGIN_RECRUITER FAIL';

export class LoginRecruiter implements Action {
  readonly type = LOGIN_RECRUITER;
  constructor() {}
}

export class LoginRecruiterSuccess implements Action {
  readonly type = LOGIN_RECRUITER_SUCCESS;
  constructor(public payload: UserAuthData) {}
}

export class LoginRecruiterFail implements Action {
  readonly type = LOGIN_RECRUITER_FAIL;
  constructor(public payload: string) {}
}

export const REGISTER_RECRUITER = 'REGISTER_RECRUITER';
export const REGISTER_RECRUITER_SUCCESS = 'REGISTER_RECRUITER SUCCESS';
export const REGISTER_RECRUITER_FAIL = 'REGISTER_RECRUITER FAIL';

export class RegisterRecruiter implements Action {
  readonly type = REGISTER_RECRUITER;
  constructor() {}
}

export class RegisterRecruiterSuccess implements Action {
  readonly type = REGISTER_RECRUITER_SUCCESS;
  constructor(public payload: any) {}
}

export class RegisterRecruiterFail implements Action {
  readonly type = REGISTER_RECRUITER_FAIL;
  constructor(public payload: any) {}
}

export type RecruiterAuthActions =
  | LoginRecruiter
  | LoginRecruiterSuccess
  | LoginRecruiterFail
  | RegisterRecruiterSuccess
  | RegisterRecruiterFail
  | RegisterJobSeeker;
