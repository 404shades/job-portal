import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-register-job-seeker',
  templateUrl: './register-job-seeker.component.html',
  styleUrls: ['./register-job-seeker.component.scss']
})
export class RegisterJobSeekerComponent implements OnInit {

  constructor(private dialog:MatDialogRef<RegisterJobSeekerComponent>,private spinnerService:NgxSpinnerService) { }

  registerFormGroup!:FormGroup;

  ngOnInit(): void {
    this.spinnerService.hide();
    this.registerFormGroup = new FormGroup({
      email:new FormControl(null,[Validators.required, Validators.email]),
      full_name:new FormControl(null,[Validators.required,Validators.minLength(3)]),
      password: new FormControl(null,[Validators.required])
    })
  }

  closeDialog(){
    this.dialog.close();
  }

  submitForm(){ 
    
    if(this.registerFormGroup.valid){
      this.spinnerService.show();
      this.dialog.close({
        status:true,
        data:{...this.registerFormGroup.value}
      })
    }
  }

}
