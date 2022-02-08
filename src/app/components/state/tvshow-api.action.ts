
/* NgRx */
import { createAction, props } from '@ngrx/store';
import { TvShow } from '../model/tvShow';

export const loadProductsSuccess = createAction(
  '[TvShow API] Load Success',
  props<{ tvshows: TvShow[] }>()
);

export const loadProductsFailure = createAction(
  '[TvShow API] Load Fail',
  props<{ error: string }>()
);


