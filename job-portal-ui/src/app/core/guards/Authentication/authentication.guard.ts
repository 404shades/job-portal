import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, filter, switchMap, take, tap } from 'rxjs/operators';
import { JWT_LOCAL_STORAGE, RECRUITER_STATUS } from '../../constants';
import { AuthorizationService } from '../../services/Authorization/authorization.service';
import { StoreService } from '../../services/store/store.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationGuard implements CanActivate {
  constructor(private authorizationService: AuthorizationService,private storeService:StoreService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const recruiterStatus = localStorage.getItem(RECRUITER_STATUS) === 'true';
    const accessToken = localStorage.getItem(JWT_LOCAL_STORAGE);
    if (!accessToken) {
      this.authorizationService.logoutUser(state.url);
      return false;
    }

    return this.getUserAuthenticationState(recruiterStatus,accessToken).pipe(
      switchMap(() => of(true)),
      catchError(() => {
        this.authorizationService.logoutUser(state.url);
        return of(false);
      })
    );
  }

  private getUserAuthenticationState(isRecruiter:boolean,token:string) {
    return this.storeService.getLoggedInUser$.pipe(
      tap((data) => {
        if (!data) {
          this.authenticateUser(isRecruiter,token);
        }
      }),
      filter((data) => !!data),
      take(1)
    );
  }

  private authenticateUser(isRecruiter:boolean,token:string) {
    if(isRecruiter){
    this.storeService.refreshRecruiterToken(token);
    }else{
      this.storeService.refreshJobSeekerToken(token);
    }
  }
}
