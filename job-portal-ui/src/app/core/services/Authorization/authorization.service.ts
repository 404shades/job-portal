import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private router:Router) { }
  
  
  logoutUser() {
    localStorage.clear();
    this.router.navigate(['/login'], { replaceUrl: true });
  }
}
