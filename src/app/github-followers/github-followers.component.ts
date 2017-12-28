import { Component, OnInit } from '@angular/core';
import { GithubFollowersService } from '../services/github-followers.service';
import { ActivatedRoute } from '@angular/router';

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
    this.service.getAll()
    .subscribe(
      followers => this.followers = followers
    )

    this.route.queryParamMap.subscribe( params => {
      console.log(params.get('page'));
      console.log(params.get('order'));
    })
  }

}
