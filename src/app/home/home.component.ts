import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //could come from server:
  post = {
    title: "Title",
    isFavorite: false
  }

  tweet = {
    body: 'Here is the body of a tweet...',
    isLiked: false,
    likesCount: 89
  }

  constructor() { }

  onFavoriteChanged(isFavorite) {
    console.log("Favorite changed ", isFavorite);
  }

  ngOnInit() {
  } 

}
