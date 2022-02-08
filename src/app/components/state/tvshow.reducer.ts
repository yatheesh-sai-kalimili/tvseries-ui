import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { TvShow } from "../model/tvShow";
import * as TvShowApiActions from './tvShow.action';
export interface State {
  tvShows: TvShowState;
}

// State for this feature (Product)
export interface TvShowState {

  tvShows: TvShow[];
  error: string;
}
const getTvShowState = createFeatureSelector<TvShowState>('tvShows');

export const getTvShows = createSelector(
  getTvShowState,
  state => state.tvShows
);




 /*
export const productReducer = createReducer<TvShowState>(

 on(TvShowApiActions.loadProductsSuccess, (state, action): TvShowState => {
    return {
      ...state,
      tvShows: action.tvShows,
      error: ''
    };
  }),

  on(TvShowApiActions.loadProductsFailure, (state, action): TvShowState => {
    return {
      ...state,
      tvShows: [],
      error: action.error
    };
  })
);

*/
