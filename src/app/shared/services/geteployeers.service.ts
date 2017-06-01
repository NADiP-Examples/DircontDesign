import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class GeteployeersService {

  constructor(private http: Http) {
  }

  getSelf(): Observable<any> {
    return this.http.get('/json_data/EmployeesOfUser.json').map((res: Response) => res.json());

  }
}
