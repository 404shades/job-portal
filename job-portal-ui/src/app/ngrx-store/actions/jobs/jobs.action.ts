import { Action } from '@ngrx/store';
import { JobCreateRequest } from 'src/app/core/data-models/job-apply-request/job_apply_request.model';
import { JobsAvailableData } from 'src/app/core/data-models/jobs-available/jobs-available.data';
import { LoadingAction } from 'src/app/modules/loading';

export const CREATE_NEW_JOB_BY_RECRUITER = 'CREATE_NEW_JOB_BY_RECRUITER';
export const CREATE_NEW_JOB_BY_RECRUITER_SUCCESS =
  'CREATE_NEW_JOB_BY_RECRUITER SUCCESS';
export const CREATE_NEW_JOB_BY_RECRUITER_FAIL =
  'CREATE_NEW_JOB_BY_RECRUITER FAIL';

export class CreateNewJobByRecruiter implements Action, LoadingAction {
  jobPortalLoading = { add: CREATE_NEW_JOB_BY_RECRUITER };
  readonly type = CREATE_NEW_JOB_BY_RECRUITER;
  constructor(public jobRequest: JobCreateRequest) {}
}

export class CreateNewJobByRecruiterSuccess implements Action, LoadingAction {
  jobPortalLoading = { remove: CREATE_NEW_JOB_BY_RECRUITER };

  readonly type = CREATE_NEW_JOB_BY_RECRUITER_SUCCESS;
  constructor(public payload: any) {}
}

export class CreateNewJobByRecruiterFail implements Action, LoadingAction {
  jobPortalLoading = { remove: CREATE_NEW_JOB_BY_RECRUITER };

  readonly type = CREATE_NEW_JOB_BY_RECRUITER_FAIL;

  constructor(public payload: any) {}
}

export const GET_ALL_AVAILABLE_JOBS = 'GET_ALL_AVAILABLE_JOBS';
export const GET_ALL_AVAILABLE_JOBS_SUCCESS = 'GET_ALL_AVAILABLE_JOBS SUCCESS';
export const GET_ALL_AVAILABLE_JOBS_FAIL = 'GET_ALL_AVAILABLE_JOBS FAIL';

export class GetAllAvailableJobs implements Action {
  readonly type = GET_ALL_AVAILABLE_JOBS;
  constructor(public searchTerm:string|undefined) {}
}

export class GetAllAvailableJobsSuccess implements Action {
  readonly type = GET_ALL_AVAILABLE_JOBS_SUCCESS;
  constructor(public payload: JobsAvailableData[]) {}
}

export class GetAllAvailableJobsFail implements Action {
  readonly type = GET_ALL_AVAILABLE_JOBS_FAIL;
  constructor(public payload: any) {}
}


export const APPLY_TO_A_JOB_BY_SEEKER = "APPLY_TO_A_JOB_BY_SEEKER"
export const APPLY_TO_A_JOB_BY_SEEKER_SUCCESS = "APPLY_TO_A_JOB_BY_SEEKER SUCCESS"
export const APPLY_TO_A_JOB_BY_SEEKER_FAIL = "APPLY_TO_A_JOB_BY_SEEKER FAIL"

export class ApplyToJobBySeeker implements Action {
    readonly type = APPLY_TO_A_JOB_BY_SEEKER;
    constructor(public jobId:string) { }
}

export class ApplyToJobBySeekerSuccess implements Action {
    readonly type = APPLY_TO_A_JOB_BY_SEEKER_SUCCESS;
    constructor(public payload: any) { }
}

export class ApplyToJobBySeekerFail implements Action {
    readonly type = APPLY_TO_A_JOB_BY_SEEKER_FAIL;
    constructor(public payload: any) { }
}


export type JobActions =
  | CreateNewJobByRecruiter
  | CreateNewJobByRecruiterSuccess
  | CreateNewJobByRecruiterFail
  | GetAllAvailableJobs
  | GetAllAvailableJobsFail
  | GetAllAvailableJobsSuccess;
