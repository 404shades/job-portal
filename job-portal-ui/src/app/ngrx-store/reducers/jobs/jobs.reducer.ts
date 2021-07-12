import { Action, createReducer, on } from '@ngrx/store';
import { JobsAvailableData } from 'src/app/core/data-models/jobs-available/jobs-available.data';
import * as fromJobsActions from '../../actions/jobs';

export interface JobsState {
  // define state
  availableJobs: JobsAvailableData[];
}

export const initialState: JobsState = {
  //set initial state
  availableJobs: [],
};

export function jobsReducer(
  state: JobsState = initialState,
  action: fromJobsActions.JobActions
): JobsState {
  switch (action.type) {
    case fromJobsActions.GET_ALL_AVAILABLE_JOBS_SUCCESS:
      return {
        ...state,
        availableJobs: action.payload,
      };

    default:
      return state;
  }
}

export const selectAvailableJobs = (state: JobsState) => state.availableJobs;

