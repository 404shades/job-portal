import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StoreService } from 'src/app/core/services/store/store.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private storeService:StoreService) { }

  loginForm!:FormGroup;
  loginInvalid:boolean = false;

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email:new FormControl(null,[Validators.required,Validators.email]),
      password:new FormControl(null,[Validators.required]),
      isRecruiter:new FormControl(false,[Validators.required])
    })
    
  }


  loginUser(){
    if(this.loginForm.valid){
      const formData = this.loginForm.value;
      if(formData.isRecruiter){
        this.loginAsRecruiter({email:formData.email,password:formData.password})
      }else{
        this.loginAsJobSeeker({email:formData.email,password:formData.password});
      }
    }
  }

  loginAsJobSeeker(data:{email:string,password:string}){
    this.storeService.loginAsJobSeeker(data,false)

  }

  loginAsRecruiter(data:{email:string,password:string}){
    this.storeService.loginAsRecruiter(data,false)
  }

}
