import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
// import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { JobsHttpService } from 'src/app/core/http/Jobs/jobs-http.service';

import * as fromJobActions from '../../actions/jobs';
//import all requried services or any dependencies

@Injectable()
export class JobEffects {
  constructor(
    private actions$: Actions,
    private jobHttpService: JobsHttpService
  ) {}

  createNewJob$ = createEffect(() =>
    this.actions$.pipe(
      ofType<fromJobActions.CreateNewJobByRecruiter>(
        fromJobActions.CREATE_NEW_JOB_BY_RECRUITER
      ),
      mergeMap((action) => {
        return this.jobHttpService.createJobByRecruiter(action.jobRequest).pipe(
          map(
            (data) => new fromJobActions.CreateNewJobByRecruiterSuccess(data)
          ),
          catchError((err) =>
            of(new fromJobActions.CreateNewJobByRecruiterFail(err))
          )
        );
      })
    )
  );

  getAllAvailableJobs$ = createEffect(() =>
    this.actions$.pipe(
      ofType<fromJobActions.GetAllAvailableJobs>(
        fromJobActions.GET_ALL_AVAILABLE_JOBS
      ),
      mergeMap((action) => {
        return this.jobHttpService.getAvailableJobs(action.searchTerm).pipe(
          map((data) => new fromJobActions.GetAllAvailableJobsSuccess(data)),
          catchError((err) =>
            of(new fromJobActions.GetAllAvailableJobsFail(err))
          )
        );
      })
    )
  );

  applyToAJobBySeeker$ = createEffect(() =>
    this.actions$.pipe(
      ofType<fromJobActions.ApplyToJobBySeeker>(
        fromJobActions.APPLY_TO_A_JOB_BY_SEEKER
      ),
      mergeMap((action) => {
        return this.jobHttpService.applyToAJob(action.jobId).pipe(
          map((data) => new fromJobActions.ApplyToJobBySeekerSuccess(data)),
          catchError((err) =>
            of(new fromJobActions.ApplyToJobBySeekerFail(err))
          )
        );
      })
    )
  );


}
