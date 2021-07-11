import { Component, OnInit } from '@angular/core';
import { JobServiceDataModel } from 'src/app/modules/recruiters-panel/data/job-services/job-services.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  availableJobServices:JobServiceDataModel[] = [
    {title:'PHp',count:12},
    {title:'PHp',count:12},
    {title:'PHp',count:12},
    {title:'PHp',count:12},
    {title:'PHp',count:12}, {title:'PHp',count:12},
    {title:'PHp',count:12}
  ]

  ngOnInit(): void {
  }

}
