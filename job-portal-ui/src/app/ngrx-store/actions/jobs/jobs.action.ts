import { Action } from '@ngrx/store';
import { JobCreateRequest } from 'src/app/core/data-models/job-apply-request/job_apply_request.model';
import { LoadingAction } from 'src/app/modules/loading';

export const CREATE_NEW_JOB_BY_RECRUITER = "CREATE_NEW_JOB_BY_RECRUITER"
export const CREATE_NEW_JOB_BY_RECRUITER_SUCCESS = "CREATE_NEW_JOB_BY_RECRUITER SUCCESS"
export const CREATE_NEW_JOB_BY_RECRUITER_FAIL = "CREATE_NEW_JOB_BY_RECRUITER FAIL"

export class CreateNewJobByRecruiter implements Action,LoadingAction {
    jobPortalLoading = {add:CREATE_NEW_JOB_BY_RECRUITER}
    readonly type = CREATE_NEW_JOB_BY_RECRUITER;
    constructor(public jobRequest:JobCreateRequest) { }
}

export class CreateNewJobByRecruiterSuccess implements Action,LoadingAction {
    jobPortalLoading = {remove:CREATE_NEW_JOB_BY_RECRUITER}

    readonly type = CREATE_NEW_JOB_BY_RECRUITER_SUCCESS;
    constructor(public payload: any) { }
}

export class CreateNewJobByRecruiterFail implements Action,LoadingAction {
    jobPortalLoading = {remove:CREATE_NEW_JOB_BY_RECRUITER}

    readonly type = CREATE_NEW_JOB_BY_RECRUITER_FAIL;

    constructor(public payload: any) { }
}

export type JobActions = CreateNewJobByRecruiter | CreateNewJobByRecruiterSuccess | CreateNewJobByRecruiterFail;