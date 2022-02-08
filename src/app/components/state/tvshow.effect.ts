import { Injectable } from '@angular/core';

import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

/* NgRx */
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { TvshowService } from 'src/app/services/tvshow.service';
import { TvShowApiActions, TvShowPageActions } from '.';

@Injectable()
export class TvShowEffects {

  constructor(private actions$: Actions, private productService: TvshowService) { }

  loadProducts$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(TvShowPageActions.loadProducts),
        mergeMap(() => this.productService.getShows()
          .pipe(
            map(tvshows => TvShowApiActions.loadProductsSuccess({ tvshows })),
            catchError(error => of(TvShowApiActions.loadProductsFailure({ error })))
          )
        )
      );
  });

}
