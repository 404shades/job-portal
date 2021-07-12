import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StoreService } from '../../services/store/store.service';

@Injectable({
  providedIn: 'root',
})
export class RecruiterGuard implements CanActivate {
  constructor(private storeService: StoreService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.storeService.isRecruiter$.pipe(
      map((data) => {
        if (data) return true;
        return false;
      })
    );
  }
}
