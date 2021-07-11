import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { getLoadingData } from 'src/app/modules/loading';
import * as fromStore from '../../../ngrx-store';




@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private store:Store<fromStore.State>) { }

  getLoggedInUser$ = this.store.select(fromStore.getLoggedInUser)
  getAllJobCategories$ = this.store.select(fromStore.getAllJobCategories)
  isLoggedIn$ = this.store.select(fromStore.getLoggedInStatus)
  isRecruiter$ = this.store.select(fromStore.getRecruiterStatus)

  isLoading$ = this.store.pipe(select(getLoadingData)).pipe((map((data)=>data && data.length>0)))

  getAllCategorires(){
    this.store.dispatch(new fromStore.GetAllAvailableJobCategories())
  }

  loginAsRecruiter(authData:{email:string,password:string},shouldRedirect:boolean){
    this.store.dispatch(new fromStore.LoginRecruiter({...authData},shouldRedirect))
  } 
  loginAsJobSeeker(authData:{email:string,password:string},shouldRedirect:boolean){
    this.store.dispatch(new fromStore.LoginJobSeeker({...authData},shouldRedirect))
  }
  registerJobSeeker(){
    this.store.dispatch(new fromStore.RegisterJobSeeker())
  }
  registerRecruiter(){
    this.store.dispatch(new fromStore.RegisterRecruiter())
  }

  refreshJobSeekerToken(accessToken:string){
    this.store.dispatch(new fromStore.RefreshJobSeekerToken(accessToken))
  }
  refreshRecruiterToken(accessToken:string){
    this.store.dispatch(new fromStore.RefreshRecruiterToken(accessToken))
  }
}
