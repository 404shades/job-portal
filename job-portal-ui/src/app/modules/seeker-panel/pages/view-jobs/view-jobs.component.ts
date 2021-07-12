import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { JobsAvailableData } from 'src/app/core/data-models/jobs-available/jobs-available.data';
import { StoreService } from 'src/app/core/services/store/store.service';

@Component({
  selector: 'app-view-jobs',
  templateUrl: './view-jobs.component.html',
  styleUrls: ['./view-jobs.component.scss']
})
export class ViewJobsComponent implements OnInit {

  constructor(private storeService:StoreService,private route:ActivatedRoute) { }

  allJobs:Observable<JobsAvailableData[]>|undefined;

  ngOnInit(): void {
    this.route.queryParams.subscribe((data)=>{
      this.storeService.getAllAvailableJobs(data['searchTerm'])
    })
    this.allJobs = this.storeService.availableJobs$;
    
  }

}
