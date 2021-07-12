import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { JobsAvailableData } from 'src/app/core/data-models/jobs-available/jobs-available.data';
import { StoreService } from 'src/app/core/services/store/store.service';

@Component({
  selector: 'app-view-jobs',
  templateUrl: './view-jobs.component.html',
  styleUrls: ['./view-jobs.component.scss']
})
export class ViewJobsComponent implements OnInit {

  constructor(private storeService:StoreService) { }

  allJobs:Observable<JobsAvailableData[]>|undefined;

  ngOnInit(): void {
    this.allJobs = this.storeService.availableJobs$;
    this.storeService.getAllAvailableJobs()
  }

}
