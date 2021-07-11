import { Action, createReducer, on } from '@ngrx/store';
import { CategoryData } from 'src/app/core/data-models/JobCategories';
import * as fromJobCategoriesActions from '../../actions/job-categories';

export interface JobCategoriesState {
  // define state
  allJobCategories: CategoryData[];
}

export const initialState: JobCategoriesState = {
  //set initial state
  allJobCategories: [],
};

export function jobCategoryReducer(
  state: JobCategoriesState = initialState,
  action: fromJobCategoriesActions.CategoryActions
): JobCategoriesState {
  switch (action.type) {
    case fromJobCategoriesActions.GET_ALL_AVAILABLE_CATEGORIES_SUCCESS:
      return {
        ...state,
        allJobCategories: [...action.payload],
      };

    default:
      return initialState;
  }
}

export const selectJobCategories = (state: JobCategoriesState) => state.allJobCategories;

