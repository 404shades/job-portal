import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobApplicationsComponent } from './pages/job-applications/job-applications.component';
import { PostJobComponent } from './pages/post-job/post-job.component';

const routes: Routes = [
    
    {
        path:'publishJob',
        component:PostJobComponent,
        pathMatch:'full'
    },

    {
      path:'jobApplications',
      component:JobApplicationsComponent,
      pathMatch:'full'
    }
    
   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecruiterRoutingModule { }
