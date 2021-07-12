import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from 'src/app/core/guards/Authentication/authentication.guard';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ViewJobsComponent } from './pages/view-jobs/view-jobs.component';

const routes: Routes = [
    {
        path:'',
        component:DashboardComponent,
        pathMatch:'full'
    },
    {
      path:'allJobs',
      canActivate:[AuthenticationGuard],
      component:ViewJobsComponent,
      pathMatch:'full'
    }
    
   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobSeekerRoutingModule { }
