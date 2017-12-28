import { Component, OnInit } from '@angular/core';
import { GithubFollowersService } from '../services/github-followers.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers:any[];

  constructor(private route: ActivatedRoute, private service: GithubFollowersService) {
    
  }

  ngOnInit() {
    Observable.combineLatest([
      this.route.paramMap, //first Observable
      this.route.queryParamMap //second Observable
    ])
    .switchMap(combined => {
      let id = combined[0].get('id'); //combined[0] is the first Observable
      let page = combined[1].get('page');//combined[1] is the second Observable

      //then call the server
      return this.service.getAll();
    })
    .subscribe(
          followers => this.followers = followers
    );

    this.route.queryParamMap.subscribe( params => {
      console.log(params.get('page'));
      console.log(params.get('order'));
    })
  }

}
