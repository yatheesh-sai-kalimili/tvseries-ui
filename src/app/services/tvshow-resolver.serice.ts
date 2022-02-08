import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';
import { TvShow } from '../components/model/tvShow';
import { TvshowService } from './tvshow.service';



@Injectable({
  providedIn: 'root'
})
export class tvShowResolver implements Resolve<TvShow> {
public tvShow;
  constructor(private tvshowService: TvshowService) { }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<TvShow> {
    const id = route.paramMap.get('id');
  if(id!=null){
    this.tvShow =  this.tvshowService.getShow(+id);
  }
  return this.tvShow;

  }

}
