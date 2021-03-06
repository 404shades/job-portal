import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './core/guards/Authentication/authentication.guard';
import { RecruiterGuard } from './core/guards/Recruiter/recruiter.guard';
import { LoginComponent } from './shared/pages/login/login.component';
import { RegisterComponent } from './shared/pages/register/register.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent,
    pathMatch:'full'
  },
  {
    path:'register',
    component:RegisterComponent,
    pathMatch:'full'
  },
  {
    path: 'jobs',
    loadChildren: () =>
      import('./modules/seeker-panel/seeker.module').then(
        (m) => m.JobSeekerModule
      ),
  },
  {
    path: 'recruiters',
    canActivate:[AuthenticationGuard,RecruiterGuard],
    loadChildren: () =>
      import('./modules/recruiters-panel/recruiter.module').then(
        (m) => m.RecruiterModule
      ),
  },
  {
    path: '',
    redirectTo: '/jobs',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
