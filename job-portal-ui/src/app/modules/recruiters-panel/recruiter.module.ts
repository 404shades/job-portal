import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { AngularMaterialModule } from '../material-module/angular-material-module';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { PostJobComponent } from './pages/post-job/post-job.component';
import { RecruiterRoutingModule } from './recruiter-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { JobApplicationsComponent } from './pages/job-applications/job-applications.component';
import { StatelessJobApplicationsComponent } from './components/stateless-job-applications/stateless-job-applications.component';

@NgModule({
  declarations: [
    PostJobComponent,
    JobApplicationsComponent,
    StatelessJobApplicationsComponent
  ],
  imports: [CommonModule,RecruiterRoutingModule,ReactiveFormsModule,CoreModule, AngularMaterialModule,SharedModule,],
  providers: [],
})
export class RecruiterModule {}
