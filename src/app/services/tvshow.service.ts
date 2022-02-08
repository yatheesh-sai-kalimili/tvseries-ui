import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, ObservableInput } from 'rxjs';
import { TvShow } from '../components/model/tvShow';
import { catchError, tap } from 'rxjs/operators';



const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable()
export class TvshowService {



  tvShowUrl = '/server/tvseries';
  handleError: (err: any, caught: Observable<TvShow>) => ObservableInput<any>;

  constructor(private http:HttpClient) { }

  getShows(): Observable<TvShow[]>{
    let token = localStorage.getItem('access_token');
    return this.http.get<TvShow[]>('/server/tvseries/all',
  {headers: new HttpHeaders().set('Authorization','Bearer' + token)}
   );
  }
  getShow(id: number): Observable<TvShow> {
    let token = localStorage.getItem('access_token');
    const url = `${this.tvShowUrl}/${id}`;
    return this.http.get<TvShow>(url,
  {headers: new HttpHeaders().set('Authorization','Bearer' + token)}
   ) .pipe(
    tap(data => console.log('getShows: ' + JSON.stringify(data))),
    catchError(this.handleError)
  );;
  }
  createNewShowRegistration(tvshow,){
    let body = JSON.stringify(tvshow);
    return this.http.post('/server/tvseries/save',body,httpOptions);
  }
  deleteShow(id: number){
    let token = localStorage.getItem('access_token');
    return this.http.delete('/server/tvseries/delete/' + id,
    {headers: new HttpHeaders().set('Authorization','Bearer' + token)})
  }
  }
