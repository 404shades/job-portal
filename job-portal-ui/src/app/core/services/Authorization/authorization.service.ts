import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterJobSeekerRequest } from '../../data-models/RegisterAuthRequest/register_auth_request';
import { RegisterRecruiterRequest } from '../../data-models/RegisterAuthRequest/register_recruiter_request';
import { AuthHttpService } from '../../http/authorization/auth-http.service';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  constructor(
    private router: Router,
    private authHttpService: AuthHttpService
  ) {}

  logoutUser() {
    localStorage.clear();
    this.router.navigate(['/login'], { replaceUrl: true });
  }

  loginJobSeeker(authData: { email: string; password: string }) {
    return this.authHttpService.loginJobSeeker({ ...authData });
  }

  loginRecruiter(authData:{email:string,password:string}){
    return this.authHttpService.loginRecruiter({...authData});
  }

  registerRecruiter(registerAuthRequest: RegisterRecruiterRequest){
    return this.authHttpService.registerRecruiter(registerAuthRequest)
  }
  registerJobSeeker(registerAuthRequest:RegisterJobSeekerRequest){
    return this.authHttpService.registerJobSeeker(registerAuthRequest)
  }

  refreshRecruiterToken(accessToken:string){
    return this.authHttpService.refreshRecruiterToken(accessToken);
  }
  refreshJobSeekerToken(accessToken:string){
    return this.authHttpService.refreshJobSeekerToken(accessToken);
  }
}
