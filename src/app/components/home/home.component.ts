import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SpotifyService } from '../../sevices/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  // countries: any[] = [];
  newReleases: any[] = [];
  loading: boolean = false;
  error: boolean = false;
  messError: string;


  constructor( private http: HttpClient, private spotify: SpotifyService ) {
    this.loading = true;
    // this.http.get('https://restcountries.eu/rest/v2/lang/es')
    //   .subscribe( (resp: any) => {
    //     this.countries = resp;
    //     console.log(resp)
    //   })
    this.spotify.getNewReleases()
      .subscribe( (data: any) => {
        console.log(data);
        this.newReleases = data;
        this.loading = false;
      }, (err) => {
      this.loading = false;
      this.error = true;
      this.messError = err.error.error.message;
      })
  }

  ngOnInit(): void {
  }

}
