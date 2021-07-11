import { Action } from '@ngrx/store';

export const LOGIN_JOB_SEEKER = 'LOGIN_JOB_SEEKER';
export const LOGIN_JOB_SEEKER_SUCCESS = 'LOGIN_JOB_SEEKER SUCCESS';
export const LOGIN_JOB_SEEKER_FAIL = 'LOGIN_JOB_SEEKER FAIL';

export class LoginJobSeeker implements Action {
  readonly type = LOGIN_JOB_SEEKER;
  constructor() {}
}

export class LoginJobSeekerSuccess implements Action {
  readonly type = LOGIN_JOB_SEEKER_SUCCESS;
  constructor(public payload: any) {}
}

export class LoginJobSeekerFail implements Action {
  readonly type = LOGIN_JOB_SEEKER_FAIL;
  constructor(public payload: any) {}
}

export const REGISTER_JOB_SEEKER = 'REGISTER_JOB_SEEKER';
export const REGISTER_JOB_SEEKER_SUCCESS = 'REGISTER_JOB_SEEKER SUCCESS';
export const REGISTER_JOB_SEEKER_FAIL = 'REGISTER_JOB_SEEKER FAIL';

export class RegisterJobSeeker implements Action {
  readonly type = REGISTER_JOB_SEEKER;
  constructor() {}
}

export class RegisterJobSeekerSuccess implements Action {
  readonly type = REGISTER_JOB_SEEKER_SUCCESS;
  constructor(public payload: any) {}
}

export class RegisterJobSeekerFail implements Action {
  readonly type = REGISTER_JOB_SEEKER_FAIL;
  constructor(public payload: any) {}
}

export type JobSeekerAuthActions =
  | LoginJobSeeker
  | LoginJobSeekerSuccess
  | LoginJobSeekerFail
  | RegisterJobSeeker
  | RegisterJobSeekerFail
  | RegisterJobSeekerSuccess;
