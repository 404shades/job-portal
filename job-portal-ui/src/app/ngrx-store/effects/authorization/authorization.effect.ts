import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthorizationService } from 'src/app/core/services/Authorization/authorization.service';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError, tap, exhaustMap } from 'rxjs/operators';

import * as fromAuthActions from '../../actions/authorization';
import { JWT_LOCAL_STORAGE, RECRUITER_STATUS } from 'src/app/core/constants';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { RegisterRecruiterComponent } from 'src/app/shared/Dialogs/register-recruiter/register-recruiter.component';
import { DialogData } from 'src/app/core/data-models/dialog-data/dialog_data.model';
import { RegisterRecruiterRequest } from 'src/app/core/data-models/RegisterAuthRequest/register_recruiter_request';
import { RegisterJobSeekerComponent } from 'src/app/shared/Dialogs/register-job-seeker/register-job-seeker.component';
import { RegisterJobSeekerRequest } from 'src/app/core/data-models/RegisterAuthRequest/register_auth_request';
//import all requried services or any dependencies

@Injectable()
export class AuthorizationEffetcs {


  constructor(
    private actions$: Actions,
    private authorizationService: AuthorizationService,
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) {
    
  }

  loginAsJobSeeker$ = createEffect(() =>
    this.actions$.pipe(
      ofType<fromAuthActions.LoginJobSeeker>(fromAuthActions.LOGIN_JOB_SEEKER),
      mergeMap((action) => {
        return this.authorizationService.loginJobSeeker(action.authData).pipe(
          map(
            (data) =>
              new fromAuthActions.LoginJobSeekerSuccess(
                data,
                action.shouldRedirect
              )
          ),
          catchError((err) => of(new fromAuthActions.LoginJobSeekerFail(err)))
        );
      })
    )
  );
  loginAsRecruiter$ = createEffect(() =>
    this.actions$.pipe(
      ofType<fromAuthActions.LoginRecruiter>(fromAuthActions.LOGIN_RECRUITER),
      mergeMap((action) => {
        return this.authorizationService.loginRecruiter(action.authData).pipe(
          map(
            (data) =>
              new fromAuthActions.LoginRecruiterSuccess(
                data,
                action.shouldRedirect
              )
          ),
          catchError((err) => of(new fromAuthActions.LoginRecruiterFail(err)))
        );
      })
    )
  );
  registerRecruiter$ = createEffect(() =>
    this.actions$.pipe(
      ofType<fromAuthActions.RegisterRecruiter>(
        fromAuthActions.REGISTER_RECRUITER
      ),
      exhaustMap((action) => {
        let dialogRef = this.dialog.open(RegisterRecruiterComponent,{width:'40%'});
        return dialogRef.afterClosed();
      }),
      mergeMap((dialogData: DialogData) =>
        dialogData && dialogData.status
          ? this.authorizationService
              .registerRecruiter(dialogData.data as RegisterRecruiterRequest)
              .pipe(
                map(
                  (data) => new fromAuthActions.RegisterRecruiterSuccess(data)
                ),
                catchError((err) =>
                  of(new fromAuthActions.RegisterRecruiterFail(err))
                )
              )
          : of(new fromAuthActions.RegisterRecruiterFail('Dialog Closed'))
      )
    )
  );

  registerJobSeeker$ = createEffect(() =>
    this.actions$.pipe(
      ofType<fromAuthActions.RegisterJobSeeker>(
        fromAuthActions.REGISTER_JOB_SEEKER
      ),
      exhaustMap((action) => {
        let dialogRef = this.dialog.open(RegisterJobSeekerComponent,{width:'40%'});
        return dialogRef.afterClosed();
      }),
      mergeMap((dialogData: DialogData) =>
        dialogData && dialogData.status
          ? this.authorizationService
              .registerJobSeeker(dialogData.data as RegisterJobSeekerRequest)
              .pipe(
                map(
                  (data) => new fromAuthActions.RegisterJobSeekerSuccess(data)
                ),
                catchError((err) =>
                  of(new fromAuthActions.RegisterJobSeekerFail(err))
                )
              )
          : of(new fromAuthActions.RegisterJobSeekerFail('Dialog Closed'))
      )
    )
  );

  RefreshJobSeekerToken$ = createEffect(() =>
    this.actions$.pipe(
      ofType<fromAuthActions.RefreshJobSeekerToken>(fromAuthActions.REFRESH_JOB_SEEKER_TOKEN),
      mergeMap((action) => {
        return this.authorizationService.refreshJobSeekerToken(action.accessToken).pipe(
          map(
            (data) =>
              new fromAuthActions.RefreshJobSeekerTokenSuccess(
                data,
              )
          ),
          catchError((err) => of(new fromAuthActions.RefreshJobSeekerTokenFail(err)))
        );
      })
    )
  );

  RefreshRecruiterToken$ = createEffect(() =>
    this.actions$.pipe(
      ofType<fromAuthActions.RefreshRecruiterToken>(fromAuthActions.REFRESH_RECRUITER_TOKEN),
      mergeMap((action) => {
        return this.authorizationService.refreshRecruiterToken(action.accessToken).pipe(
          map(
            (data) =>
              new fromAuthActions.RefreshRecruiterTokenSuccess(
                data,
              )
          ),
          catchError((err) => of(new fromAuthActions.RefreshRecruiterTokenFail(err)))
        );
      })
    )
  );

  onLoginJobSeekerSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType<fromAuthActions.LoginJobSeekerSuccess>(
          fromAuthActions.LOGIN_JOB_SEEKER_SUCCESS
        ),
        tap((data) => {
          if (data && data.payload && data.payload.accessToken) {
            localStorage.setItem(JWT_LOCAL_STORAGE, data.payload.accessToken);
            localStorage.setItem(RECRUITER_STATUS,`${data.payload.isRecruiter}`)

          }
          if (data.shouldRedirect) {
            let returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/jobs';
            this.router.navigateByUrl(returnUrl,{replaceUrl:true})
          }
        })
      ),
    { dispatch: false }
  );

  onRecruiterLoginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType<fromAuthActions.LoginRecruiterSuccess>(
          fromAuthActions.LOGIN_RECRUITER_SUCCESS
        ),
        tap((data) => {
          if (data && data.payload && data.payload.accessToken) {
            localStorage.setItem(JWT_LOCAL_STORAGE, data.payload.accessToken);
            localStorage.setItem(RECRUITER_STATUS,`${data.payload.isRecruiter}`)
          }
          if (data.shouldRedirect) {
            let returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/jobs';
            this.router.navigateByUrl(returnUrl,{replaceUrl:true})
          }
        })
      ),
    { dispatch: false }
  );

  onJobSeekerRegisterSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType<fromAuthActions.RegisterJobSeekerSuccess>(
          fromAuthActions.REGISTER_JOB_SEEKER_SUCCESS
        ),
        tap((data) => {
          if (data && data.payload && data.payload.accessToken) {
            localStorage.setItem(JWT_LOCAL_STORAGE, data.payload.accessToken);
            localStorage.setItem(RECRUITER_STATUS,`${data.payload.isRecruiter}`)
          }
          let returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/jobs';
          this.router.navigateByUrl(returnUrl,{replaceUrl:true})
        })
      ),
    { dispatch: false }
  );
  onRecruiterRegisterSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType<fromAuthActions.RegisterRecruiterSuccess>(
          fromAuthActions.REGISTER_RECRUITER_SUCCESS
        ),
        tap((data) => {
          if (data && data.payload && data.payload.accessToken) {
            localStorage.setItem(JWT_LOCAL_STORAGE, data.payload.accessToken);
            localStorage.setItem(RECRUITER_STATUS,`${data.payload.isRecruiter}`)

          }
          let returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/jobs';
          this.router.navigateByUrl(returnUrl,{replaceUrl:true})
        })
      ),
    { dispatch: false }
  );


  onRecruiterRefreshSuccesss$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType<fromAuthActions.RefreshRecruiterTokenSuccess>(
          fromAuthActions.REFRESH_RECRUITER_TOKEN_SUCCESS
        ),
        tap((data) => {
          if (data && data.payload && data.payload.accessToken) {
            localStorage.setItem(JWT_LOCAL_STORAGE, data.payload.accessToken);
            localStorage.setItem(RECRUITER_STATUS,`${data.payload.isRecruiter}`)

          }

        })
      ),
    { dispatch: false }
  );

  onJobSeekerRefreshTokenSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType<fromAuthActions.RefreshJobSeekerTokenSuccess>(
          fromAuthActions.REFRESH_JOB_SEEKER_TOKEN_SUCCESS
        ),
        tap((data) => {
          if (data && data.payload && data.payload.accessToken) {
            localStorage.setItem(JWT_LOCAL_STORAGE, data.payload.accessToken);
            localStorage.setItem(RECRUITER_STATUS,`${data.payload.isRecruiter}`)

          }

        })
      ),
    { dispatch: false }
  );
}
