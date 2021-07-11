import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-register-recruiter',
  templateUrl: './register-recruiter.component.html',
  styleUrls: ['./register-recruiter.component.scss']
})
export class RegisterRecruiterComponent implements OnInit {
  

  registerFormGroup!:FormGroup


  constructor(private dialog:MatDialogRef<RegisterRecruiterComponent>,private spinnerService:NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinnerService.hide();
    this.registerFormGroup = new FormGroup({
      company_name:new FormControl(null,[Validators.required,Validators.minLength(3)]),
      email:new FormControl(null,[Validators.required, Validators.email]),
      recuiter_name:new FormControl(null,[Validators.required,Validators.minLength(3)]),
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
