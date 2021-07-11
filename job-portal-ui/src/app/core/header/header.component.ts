import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthorizationService } from '../services/Authorization/authorization.service';
import { StoreService } from '../services/store/store.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedIn$:Observable<boolean>|undefined;
  isRecruiter$:Observable<boolean|undefined>|undefined;

  constructor(private storeService:StoreService,private authorizationService:AuthorizationService) { }

  ngOnInit(): void {
    this.isLoggedIn$ = this.storeService.isLoggedIn$;
    this.isRecruiter$ = this.storeService.isRecruiter$;
  }


  logoutUser():void{
    this.authorizationService.logoutUser()
  }

}
