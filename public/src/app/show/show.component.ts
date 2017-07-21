import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { HttpService } from '../http.service'

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})

export class ShowComponent implements OnInit {
    userId = null;
    constructor(private _route:ActivatedRoute, private _httpservice: HttpService) {
        this._route.params.subscribe((param)=> {this.userId = param.id})
  }

  user = [];

  getUser(id){
      this._httpservice.getUser(id)
      .then((user) => { this.user = user, console.log(this.user)})
      .catch(err => {console.log(err);})
  }
  ngOnInit() {
  }

}
