import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AngularMaterialModule } from "../modules/material-module/angular-material-module";
import { HoverShadowDirective } from "./directives/hover-shadow.directive";
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RegisterJobSeekerComponent } from './Dialogs/register-job-seeker/register-job-seeker.component';
import { RegisterRecruiterComponent } from './Dialogs/register-recruiter/register-recruiter.component';

@NgModule({
    declarations:[HoverShadowDirective, LoginComponent, RegisterComponent, RegisterJobSeekerComponent, RegisterRecruiterComponent],
    exports:[HoverShadowDirective],
    imports:[CommonModule,AngularMaterialModule,ReactiveFormsModule,RouterModule]
})
export class SharedModule {}
