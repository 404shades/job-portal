import { Component, OnInit } from '@angular/core';
import { JobApplications } from 'src/app/core/data-models/job-applications/job-applications.model';
import { JobsHttpService } from 'src/app/core/http/Jobs/jobs-http.service';

@Component({
  selector: 'app-job-applications',
  templateUrl: './job-applications.component.html',
  styleUrls: ['./job-applications.component.scss']
})
export class JobApplicationsComponent implements OnInit {

  constructor(private jobhttpService:JobsHttpService) { }

  groupedApplications:{[key:string]:JobApplications[]}|undefined;


  ngOnInit(): void {
    this.jobhttpService.getJobApplications().subscribe(data=>{
      if(data){
        this.groupedApplications = groupByKey(data,'JobId');
      }
    })
  }

}

const groupByKey = (list:any[], key:string) => list.reduce((hash, obj) => ({...hash, [obj[key]]:( hash[obj[key]] || [] ).concat(obj)}), {})
