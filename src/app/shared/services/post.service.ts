import { Component, Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Location } from '../components/location-select/location.model';

@Component({
  providers: [Http]
})

export class PostService {
  serverUrl = "http://0.0.0.0:3000/api";

  constructor(private http: Http) {
  }

  searchLocation(text: string, element: string): Observable<any> {
    let url = this.serverUrl + '/locations';

    switch(element) {
      case 'city':
        url += '/cities?q=';
      break;
      case 'region':
        url += '/regions?q=';
      break;
      case 'country':
        url += '/countries?q=';
      break;
      default:
        url += '/location?q=' + text;
    }
    url += text;

    return this.http.get(url).map((res) => {
      res.json()
    }).catch((e) => {
      return Observable.throw(e);
    });
  }
  
  addLocation(location: Location, author_comment): Observable<any> {
    const url = this.serverUrl + "/requests/locations";
    const data = {
      location,
      author_comment
    }
    return this.http.post(url, data).map((res) => {
      res.json()
    }).catch((e) => {
      return Observable.throw(e);
    });
  }
}