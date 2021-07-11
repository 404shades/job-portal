import { Action } from '@ngrx/store';
import { MODULE_ID } from './loading.constant';
import { LoadingAction } from './loading.model';

export enum ActionTypes {
  Add = '[@fx/ngrx/loading] Add',
  Remove = '[@fx/ngrx/loading] Remove'
}

export class Add implements Action, Partial<LoadingAction> {
  readonly type = ActionTypes.Add;
  jobPortalLoading: { add: string };
  constructor(add: string) { 
    this.jobPortalLoading = { add };
  }
}

export class Remove implements Action, Partial<LoadingAction> {
  readonly type = ActionTypes.Remove;
  jobPortalLoading: { remove: string };
  constructor(remove: string) {
    this.jobPortalLoading = { remove };
  }
}

export type Actions = Add | Remove;