import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { BaseResponseModel } from '../data-models/base_response.model';
import { AuthorizationService } from '../services/Authorization/authorization.service';

@Injectable({
  providedIn: 'root',
})
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private toastService: ToastrService,
    private authorizationService: AuthorizationService
  ) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          let baseResponseModel: BaseResponseModel =
            event.body as BaseResponseModel;
          if (
            baseResponseModel.doLogout &&
            baseResponseModel.doLogout === true
          ) {
            this.authorizationService.logoutUser();
            throw new HttpErrorResponse({
              error:
                (baseResponseModel?.messages?.errorMessage
                  ? baseResponseModel.messages.errorMessage
                  : undefined) ?? 'You have been logged out of the app',
              headers: event.headers,
              status: 500,
              statusText: 'Error',
              url: event.url!,
            });
          }

          if (baseResponseModel.messages) {
            if (
              baseResponseModel.messages.errorMessage
            ) {
              throw new HttpErrorResponse({
                error: baseResponseModel.messages.errorMessage
                  ? baseResponseModel.messages.errorMessage
                  : 'Please contact app administrator',
                headers: event.headers,
                status: 500,
                statusText: 'Error',
                url: event.url!,
              });
            }
            if (baseResponseModel.messages.successMessage) {
              this.toastService.success(
                baseResponseModel.messages.successMessage
              );
            }
          }
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        this.toastService.error(error.error);
        return throwError(error.error);
        // return throwError(error.error);
      })
    ) as Observable<HttpEvent<any>>;
  }
}
