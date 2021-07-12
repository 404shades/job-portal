import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { JWT_LOCAL_STORAGE, RECRUITER_STATUS } from './core/constants';
import { AuthorizationService } from './core/services/Authorization/authorization.service';
import { StoreService } from './core/services/store/store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private storeService:StoreService,private spinnerService:NgxSpinnerService,private authenticationService:AuthorizationService){}

  refreshUserProfile() {
    const recruiterStatus = localStorage.getItem(RECRUITER_STATUS) === 'true';
    const accessToken = localStorage.getItem(JWT_LOCAL_STORAGE);
    if (accessToken) {
      if (recruiterStatus) {
        this.storeService.refreshRecruiterToken(accessToken)
      } else {
        this.storeService.refreshJobSeekerToken(accessToken);
      }
    }
  }
  ngOnInit(){
    this.refreshUserProfile();
    this.storeService.isLoading$.subscribe(val=>{
      if(val) this.spinnerService.show()
      else this.spinnerService.hide()
    })
  }
}
