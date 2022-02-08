import { Component, OnInit } from '@angular/core';
import { TvshowService } from "../../services/tvshow.service";
import { ActivatedRoute, Router } from "@angular/router";
import { TvShow } from '../model/tvShow';

@Component({
  selector: 'app-view-registration',
  templateUrl: './view-registration.component.html',
  styleUrls: ['./view-registration.component.css']
})
export class ViewRegistrationComponent implements OnInit {
 public tvShow;
  constructor(private tvshow: TvshowService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    //Preloading data before displaying the component
    const resolvedData: TvShow =
    this.route.snapshot.data['resolvedData'];
    //Setting it up with the tvShow Object
    this.getShowReq(resolvedData);
  }
getShowReq(tvshow: TvShow): void{

      this.tvShow = tvshow;

    }

onDelete(){
  this.tvshow.deleteShow(this.route.snapshot.params.id).subscribe();
  this.router.navigateByUrl('/admin');
}
}
