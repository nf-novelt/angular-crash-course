import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  isFavorite = true;
  nbOfClicks = 0;

  constructor() { }

  onClick() {
    this.isFavorite = !this.isFavorite;
    this.nbOfClicks ++;
  }

  ngOnInit() {
  }

}
