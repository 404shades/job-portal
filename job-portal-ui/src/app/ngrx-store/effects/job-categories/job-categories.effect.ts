import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CategoriesService } from 'src/app/core/http/categories/categories.service';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import * as fromCategoriesActions from '../../actions/job-categories';
import { of } from 'rxjs';

@Injectable()
export class CategoryEffects {
    constructor(private actions$: Actions,private categoryHttpService:CategoriesService) { }

    getAllCategories$ = createEffect(() =>
        this.actions$.pipe(
            ofType<fromCategoriesActions.GetAllAvailableJobCategories>(fromCategoriesActions.GET_ALL_AVAILABLE_CATEGORIES),
            mergeMap(() => {
                return this.categoryHttpService.getAllAvailableJobCategories().pipe(
                    map((data)=>new fromCategoriesActions.GetAllAvailableJobCategoriesSuccess(data)),
                    catchError(err=>of(new fromCategoriesActions.GetAllAvailableJobCategoriesFail(err)))
                )
            })
        )
    );
}