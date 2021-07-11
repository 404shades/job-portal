import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/core/services/store/store.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private storeService:StoreService) { }

  ngOnInit(): void {
    
  }

  onRecruiterRegister(){
    this.storeService.registerRecruiter();
  }
  onJobSeekerRegister(){
    this.storeService.registerJobSeeker();

  }



}
