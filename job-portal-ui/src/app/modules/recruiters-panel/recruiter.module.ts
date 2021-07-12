import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { AngularMaterialModule } from '../material-module/angular-material-module';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { PostJobComponent } from './pages/post-job/post-job.component';
import { RecruiterRoutingModule } from './recruiter-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PostJobComponent
  ],
  imports: [CommonModule,RecruiterRoutingModule,ReactiveFormsModule,CoreModule, AngularMaterialModule,SharedModule,],
  providers: [],
})
export class RecruiterModule {}
