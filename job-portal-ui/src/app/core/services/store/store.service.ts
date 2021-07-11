import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../ngrx-store';




@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private store:Store<fromStore.State>) { }

  getLoggedInUser$ = this.store.select(fromStore.getLoggedInUser)
}
