import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class AuthService {

  constructor(private http: Http) {
  }

  getSelf():Observable<any> {
    // console.log('getSelf');
    return this.http.get('/json_data/user.json').map((res:Response) => res.json());
  }

  getUserCompany(user_id):Observable<any> {
    return this.http.get('/json_data/company.json').map((res:Response) => res.json());
  }

}
