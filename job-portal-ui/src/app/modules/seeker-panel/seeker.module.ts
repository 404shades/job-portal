import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { AngularMaterialModule } from '../material-module/angular-material-module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { JobSeekerRoutingModule } from './seeker-routing.module';
import { StatlessServiceComponent } from './components/statless-service/statless-service.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [DashboardComponent, StatlessServiceComponent,],
  imports: [JobSeekerRoutingModule, CoreModule, AngularMaterialModule,CommonModule,SharedModule],
  providers: [],
})
export class JobSeekerModule {}
