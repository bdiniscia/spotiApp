import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/sevices/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  artists: any[] = [];
  loading: boolean = false;

  constructor( private spotify: SpotifyService ) {

   }

  ngOnInit(): void {
  }

  search (text: string) {
    this.loading = true;
    this.spotify.getArtist(text)
      .subscribe( (resp: any) => {
        console.log(resp);
        this.artists = resp;
        this.loading = false;
      })
  }

}
