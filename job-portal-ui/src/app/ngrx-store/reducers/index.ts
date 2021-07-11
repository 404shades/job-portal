import { ActionReducerMap, createSelector, MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import * as fromAuthorization from './authorization';
export interface State{
    userAuthorizationState:fromAuthorization.UserProfileState
}
export const reducers:ActionReducerMap<State,any> = {
    userAuthorizationState:fromAuthorization.authReducer
}

export const selectUserAuthState = (state: State) =>
  state.userAuthorizationState;
  export const getLoggedInUser = createSelector(
    selectUserAuthState,
    fromAuthorization.selectUser,
  
  );


  export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];