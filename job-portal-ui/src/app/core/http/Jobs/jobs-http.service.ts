import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  APPLY_TO_JOB_ENDPOINT,
  AVAILABLE_JOBS_ENDPOINT,
  RECRUITER_CREATE_JOB,
} from '../../constants';
import { BaseResponseModel } from '../../data-models/base_response.model';
import { JobCreateRequest } from '../../data-models/job-apply-request/job_apply_request.model';
import { JobsAvailableData } from '../../data-models/jobs-available/jobs-available.data';

@Injectable({
  providedIn: 'root',
})
export class JobsHttpService {
  constructor(private httpClient: HttpClient) {}

  createJobByRecruiter(jobRequest: JobCreateRequest): Observable<any> {
    return this.httpClient
      .post<BaseResponseModel>(RECRUITER_CREATE_JOB, jobRequest)
      .pipe(map((data) => data.response));
  }

  getAvailableJobs(): Observable<JobsAvailableData[]> {
    return this.httpClient
      .get<BaseResponseModel>(AVAILABLE_JOBS_ENDPOINT)
      .pipe(map((data) => data.response as JobsAvailableData[]));
  }

  applyToAJob(jobId: string): Observable<any> {
    return this.httpClient
      .post<BaseResponseModel>(APPLY_TO_JOB_ENDPOINT, { JobId: jobId })
      .pipe(map((data) => data.response));
  }
}
