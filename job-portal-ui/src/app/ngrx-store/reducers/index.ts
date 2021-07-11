import { ActionReducerMap, createSelector, MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import * as fromAuthorization from './authorization';
import * as fromJobCategory from './job-category';
export interface State {
  userAuthorizationState: fromAuthorization.UserProfileState;
  jobCategoryState: fromJobCategory.JobCategoriesState;
}
export const reducers: ActionReducerMap<State, any> = {
  userAuthorizationState: fromAuthorization.authReducer,
  jobCategoryState: fromJobCategory.jobCategoryReducer,
};

export const selectUserAuthState = (state: State) =>
  state.userAuthorizationState;
export const selectJobCategoryState = (state: State) => state.jobCategoryState;
export const getLoggedInUser = createSelector(
  selectUserAuthState,
  fromAuthorization.selectUser
);

export const getLoggedInStatus = createSelector(selectUserAuthState,fromAuthorization.selectLoggedInStatus)
export const getRecruiterStatus = createSelector(selectUserAuthState,fromAuthorization.selectRecruiterStatus)

export const getAllJobCategories = createSelector(
  selectJobCategoryState,
  fromJobCategory.selectJobCategories
);


export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
