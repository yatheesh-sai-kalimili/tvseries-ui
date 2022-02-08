import { Component, OnInit, ViewChild } from '@angular/core';
import { TvshowService } from "../../services/tvshow.service";
import { FormGroup, FormControl, Validators  } from "@angular/forms";
import { Observable } from "rxjs/Observable";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private tvshow: TvshowService,private httpClient:HttpClient) { }
  showform: FormGroup;
  validMessage: string = "";


  ngOnInit(): void {
    this.showform = new FormGroup({
      actor: new FormControl('', Validators.required),
      genre: new FormControl('', Validators.required),
      releaseDate: new FormControl('',Validators.required),
      tvShowName: new FormControl('',Validators.required),
      numberOfSeasons: new FormControl('',Validators.required)
    })

  }


  submitRegistration(){
    if(this.showform.valid){

      this.validMessage = "Your show registration has been submitted. Thank you!";
      this.tvshow.createNewShowRegistration(this.showform.value).subscribe(
        data => {
          this.showform.reset();
          return true;
        },
        error => {
          return Observable.throw(error);
        }
      )
    }
    else{
      this.validMessage = "Please fill out the form before submitting!";
    }
  }


    clicked = false;
    selectedFile: File;
    retrievedImage: any;
    base64Data: any;
    retrieveResonse: any;
    message: string;
    imageName: any;
    //Gets called when the user selects an image
    public onFileChanged(event) {
      //Select File
      this.selectedFile = event.target.files[0];
    }
    //Gets called when the user clicks on submit to upload the image
    onUpload() {

      console.log(this.selectedFile);
      //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
      const uploadImageData = new FormData();
      uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
      //Make a call to the Spring Boot Application to save the image
      this.message = 'Image uploaded successfully';
      this.clicked = true;
      this.httpClient.post('/server/tvseries/upload', uploadImageData, { observe: 'response' })
        .subscribe(() => {

            this.message = 'Image uploaded successfully';


        });
    }

      //Gets called when the user clicks on retieve image button to get the image from back end



  }

