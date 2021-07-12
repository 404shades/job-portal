import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JobsAvailableData } from 'src/app/core/data-models/jobs-available/jobs-available.data';
import { UserAuthData } from 'src/app/core/data-models/UserAuthorization';
import { StoreService } from 'src/app/core/services/store/store.service';

@Component({
  selector: 'app-statless-job',
  templateUrl: './statless-job.component.html',
  styleUrls: ['./statless-job.component.scss']
})
export class StatlessJobComponent implements OnInit {

  @Input() jobData:JobsAvailableData|undefined;

  isRecruiter$:Observable<boolean|undefined>|undefined

  constructor(private storeService:StoreService) { }

  ngOnInit(): void {
    this.isRecruiter$ = this.storeService.isRecruiter$;
  }

  get isMyPostedJobs(){
    return this.storeService.getLoggedInUser$.pipe(map((data)=>{
      if(data && data.userData && data.userData.id && this.jobData && this.jobData.Recruiter && this.jobData.Recruiter.id){
        return data.userData.id===this.jobData.Recruiter.id;
      }
      return false;
    }))
  }

  applyToJob(){
    if(this.jobData && this.jobData.id){
    this.storeService.applyToAJob(this.jobData.id)
    }
  }

  

}
