import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) {
    console.log('Listo el servicio de Spotify')
  }

  getHttp (query: string) {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCDB3oqx-j3eqBJ6yXXd_VGu-EEf4cbnZ3cX2pPaB261FUNqImSGsSZFgIA04KgmlO--771tLYHT6h6B7g'
    });

    const url = `https://api.spotify.com/v1/${query}`;

    return this.http.get(url, { headers })
  }

  getNewReleases () {

    return this.getHttp('browse/new-releases?limit=20')
              .pipe(map( data => data['albums'].items));
  }

  getArtist (term: string) {
    return this.getHttp(`search?q=${term}&type=artist&limit=15`)
              .pipe(map( data =>  data['artists'].items));
  }

  getArtistCard (id: string) {
    return this.getHttp(`artists/${id}`);
  }

  getTopTracks ( id: string ) {
    return this.getHttp(`artists/${id}/top-tracks?country=US`)
              .pipe(map( data => data['tracks'] ));

  }


}
