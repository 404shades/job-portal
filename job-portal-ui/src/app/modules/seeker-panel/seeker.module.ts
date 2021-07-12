import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { AngularMaterialModule } from '../material-module/angular-material-module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { JobSeekerRoutingModule } from './seeker-routing.module';
import { StatlessServiceComponent } from './components/statless-service/statless-service.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ViewJobsComponent } from './pages/view-jobs/view-jobs.component';
import { StatlessJobComponent } from './components/statless-job/statless-job.component';

@NgModule({
  declarations: [DashboardComponent, StatlessServiceComponent, ViewJobsComponent, StatlessJobComponent,],
  imports: [JobSeekerRoutingModule, CoreModule, AngularMaterialModule,CommonModule,SharedModule],
  providers: [],
})
export class JobSeekerModule {}
