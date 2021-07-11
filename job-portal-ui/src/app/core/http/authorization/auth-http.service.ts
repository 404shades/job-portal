import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  DO_NOT_ADD_TOKEN,
  JOB_SEEKER_LOGIN_ENDPOINT,
  JOB_SEEKER_REFRESH_TOKEN,
  JOB_SEEKER_REGISTER_ENDPOINT,
  RECRUITER_LOGIN_ENDPOINT,
  RECRUITER_REFRESH_TOKEN,
  RECRUITER_REGISTER_ENDPOINT,
} from '../../constants';
import { BaseResponseModel } from '../../data-models/base_response.model';
import { RegisterJobSeekerRequest } from '../../data-models/RegisterAuthRequest/register_auth_request';
import { RegisterRecruiterRequest } from '../../data-models/RegisterAuthRequest/register_recruiter_request';
import { UserAuthData } from '../../data-models/UserAuthorization';

@Injectable({
  providedIn: 'root',
})
export class AuthHttpService {
  constructor(private httpClient: HttpClient) {}
  loginJobSeeker(authData: {
    email: string;
    password: string;
  }): Observable<UserAuthData> {
    return this.httpClient
      .post<BaseResponseModel>(JOB_SEEKER_LOGIN_ENDPOINT, authData, {
        headers: {
          [DO_NOT_ADD_TOKEN]: 'true',
        },
      })
      .pipe(map((data) => data.response as UserAuthData));
  }

  registerJobSeeker(
    registerAuthRequest: RegisterJobSeekerRequest
  ): Observable<UserAuthData> {
    return this.httpClient
      .post<BaseResponseModel>(
        JOB_SEEKER_REGISTER_ENDPOINT,
        registerAuthRequest,
        {
          headers: {
            [DO_NOT_ADD_TOKEN]: 'true',
          },
        }
      )
      .pipe(map((data) => data.response as UserAuthData));
  }

  loginRecruiter(authData: {
    email: string;
    password: string;
  }): Observable<UserAuthData> {
    return this.httpClient
      .post<BaseResponseModel>(RECRUITER_LOGIN_ENDPOINT, authData, {
        headers: {
          [DO_NOT_ADD_TOKEN]: 'true',
        },
      })
      .pipe(map((data) => data.response as UserAuthData));
  }

  refreshRecruiterToken(accessToken:string): Observable<UserAuthData> {
    return this.httpClient
      .post<BaseResponseModel>(RECRUITER_REFRESH_TOKEN, {},{
        headers:{
          'AuthorizationToken': accessToken,
          [DO_NOT_ADD_TOKEN]:"true"
        }
      })
      .pipe(map((data) => data.response as UserAuthData));
  }

  refreshJobSeekerToken(accessToken:string): Observable<UserAuthData> {
    return this.httpClient
      .post<BaseResponseModel>(JOB_SEEKER_REFRESH_TOKEN, {},{headers:{
        'AuthorizationToken': accessToken,
        [DO_NOT_ADD_TOKEN]:"true"
      }})
      .pipe(map((data) => data.response as UserAuthData));
  }

  registerRecruiter(
    registerAuthRequest: RegisterRecruiterRequest
  ): Observable<UserAuthData> {
    return this.httpClient
      .post<BaseResponseModel>(
        RECRUITER_REGISTER_ENDPOINT,
        registerAuthRequest,
        {
          headers: {
            [DO_NOT_ADD_TOKEN]: 'true',
          },
        }
      )
      .pipe(map((data) => data.response as UserAuthData));
  }
}
