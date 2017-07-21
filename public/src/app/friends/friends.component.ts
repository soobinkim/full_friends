import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'


@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
    friends = [];
    constructor(private _httpservice: HttpService){}
    ngOnInit() {
        this._httpservice.getAllFriends()
        .then((friends) => {this.friends = friends})
        .catch(err => {console.log(err);})

    }
}
