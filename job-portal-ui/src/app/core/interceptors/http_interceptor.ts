import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, throwError } from 'rxjs';
import { catchError, concatMap, map, take } from 'rxjs/internal/operators';
import { environment } from 'src/environments/environment';
import { DO_NOT_ADD_TOKEN } from '../constants';
import { AuthorizationService } from '../services/Authorization/authorization.service';
import { StoreService } from '../services/store/store.service';
@Injectable({
  providedIn: 'root',
})
export class BaseHttpInterceptor implements HttpInterceptor {
  constructor(
    @Inject('BASE_API_URL') private baseUrl: string,
    private authorizationService: AuthorizationService,
    private storeService: StoreService
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return this.storeService.getLoggedInUser$.pipe(
      take(1),
      concatMap((userProfile) => {
        let tokenData: string | undefined | null = undefined;
        if (req.headers.has('AuthorizationToken')) {
          tokenData = req.headers.get('AuthorizationToken');
        }
        if (!req.headers.has(DO_NOT_ADD_TOKEN)) {
          tokenData = userProfile?.accessToken;
          if (!tokenData) {
            this.authorizationService.logoutUser();
            return throwError('Token Data not found');
          }
        }
        const apiReq = req.clone({
          url: `${this.baseUrl}/${req.url}`,
          headers: req.headers
            .set('Authorization', `Bearer ${tokenData}`)
            .set(
              'user_agent',
              'web-' + window.navigator.userAgent.substr(0, 76)
            )
            .delete(DO_NOT_ADD_TOKEN)
            .delete("AuthorizationToken")
        });
        return next.handle(apiReq);
      })
    );
  }
}
