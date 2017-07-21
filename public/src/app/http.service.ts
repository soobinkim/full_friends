import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs/Rx";

@Injectable()
export class HttpService {

  constructor(private _http: Http) { }
  getAllFriends(){
      return this._http.get("/friends").map((friends) => friends.json()).toPromise()
  }
  getUser(userId){
      return this._http.get('/friends/' + userId).map((user) => user.json()).toPromise()
  }
}
