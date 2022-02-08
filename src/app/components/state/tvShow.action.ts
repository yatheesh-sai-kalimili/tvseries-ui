import { createAction, props } from "@ngrx/store";
import { TvShow } from "../model/tvShow";

export const loadProductsSuccess = createAction(
  '[TvShow] Load Success',
  props<{ tvShows: TvShow[] }>()
);
export const initializeCurrentProduct = createAction(
  '[TvShow] Initialize Current Product'
);

export const loadProducts = createAction(
  '[TvShow] Load'
);
export const loadProductsFailure = createAction(
  '[TvShow] Load Fail',
  props<{ error: string }>()
);
