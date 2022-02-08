
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TvshowService } from "../../services/tvshow.service";
import { TvShow } from '../model/tvShow';
import { Store } from '@ngrx/store';
import {  getTvShows, State } from '../state/tvshow.reducer';

interface Show {
  value: string;
  viewValue: string;
}



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public shows: any;
  public filter:any;
  tvshows: Show[] = [
    {value: 'Anime', viewValue: 'Anime'},
    {value: 'Action', viewValue: 'Action'},
    {value: 'Adventure', viewValue: 'Adventure'},
    {value: 'Drama', viewValue: 'Drama'},
    {value: 'Fantasy', viewValue: 'Fantasy'},
    {value: 'Crime', viewValue: 'Crime'},
    {value: 'Thriller', viewValue: 'Thriller'},
    {value: 'Horror', viewValue: 'Horror'},
    {value: 'Comedy', viewValue: 'Comedy'},
    {value: 'Sci-Fi', viewValue: 'Sci-Fi'},
  ];



  constructor(private tvshow: TvshowService,private store: Store<State>) { }

  tvShows$: Observable<TvShow[]>;

  ngOnInit(): void {
    this.getShows();
    this.tvShows$ = this.store.select(getTvShows);
  }

  handleFilter(event: string){
   this.filter = event;
   console.log(this.filter);
  }
  getShows(){
    this.tvshow.getShows().subscribe(
      data => {this.shows = data},
      err => console.log(err),
      () => console.log('shows loaded')


    );
  }
}
