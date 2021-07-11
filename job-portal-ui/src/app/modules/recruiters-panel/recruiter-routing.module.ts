import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostJobComponent } from './pages/post-job/post-job.component';

const routes: Routes = [
    {
        path:'publishJob',
        component:PostJobComponent,
        pathMatch:'full'
    },
    
   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecruiterRoutingModule { }
