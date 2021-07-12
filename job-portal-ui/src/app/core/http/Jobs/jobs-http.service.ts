import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RECRUITER_CREATE_JOB } from '../../constants';
import { BaseResponseModel } from '../../data-models/base_response.model';
import { JobCreateRequest } from '../../data-models/job-apply-request/job_apply_request.model';

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
}
