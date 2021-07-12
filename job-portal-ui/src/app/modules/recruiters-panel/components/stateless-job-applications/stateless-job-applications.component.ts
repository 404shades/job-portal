import { Component, Input, OnInit } from '@angular/core';
import { JobApplications } from 'src/app/core/data-models/job-applications/job-applications.model';

@Component({
  selector: 'app-stateless-job-applications',
  templateUrl: './stateless-job-applications.component.html',
  styleUrls: ['./stateless-job-applications.component.scss']
})
export class StatelessJobApplicationsComponent implements OnInit {

  @Input() jobApplications:JobApplications[]|undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
