import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DO_NOT_ADD_TOKEN, GET_ALL_AVAILABLE_CATEGORIES } from '../../constants';
import { BaseResponseModel } from '../../data-models/base_response.model';
import { CategoryData } from '../../data-models/JobCategories';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private httpClient:HttpClient) { }

  getAllAvailableJobCategories():Observable<CategoryData[]>{
    return this.httpClient.get<BaseResponseModel>(GET_ALL_AVAILABLE_CATEGORIES,{headers:{
      [DO_NOT_ADD_TOKEN]:"true"
    }}).pipe(
      map((data)=>data.response as CategoryData[])
    )
  }
}
