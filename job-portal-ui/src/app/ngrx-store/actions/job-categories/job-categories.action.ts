import { Action } from '@ngrx/store';
import { CategoryData } from 'src/app/core/data-models/JobCategories';

export const GET_ALL_AVAILABLE_CATEGORIES = "GET_ALL_AVAILABLE_CATEGORIES"
export const GET_ALL_AVAILABLE_CATEGORIES_SUCCESS = "GET_ALL_AVAILABLE_CATEGORIES SUCCESS"
export const GET_ALL_AVAILABLE_CATEGORIES_FAIL = "GET_ALL_AVAILABLE_CATEGORIES FAIL"

export class GetAllAvailableJobCategories implements Action {
    readonly type = GET_ALL_AVAILABLE_CATEGORIES;
    constructor() { }
}

export class GetAllAvailableJobCategoriesSuccess implements Action {
    readonly type = GET_ALL_AVAILABLE_CATEGORIES_SUCCESS;
    constructor(public payload: CategoryData[]) { }
}

export class GetAllAvailableJobCategoriesFail implements Action {
    readonly type = GET_ALL_AVAILABLE_CATEGORIES_FAIL;
    constructor(public payload: any) { }
}

export type CategoryActions = GetAllAvailableJobCategories | GetAllAvailableJobCategoriesSuccess | GetAllAvailableJobCategoriesFail;