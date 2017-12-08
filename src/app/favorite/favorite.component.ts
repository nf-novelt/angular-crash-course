import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  isEmpty = true;
  nbOfClicks = 0;

  constructor() { }

  onClick() {
    this.isEmpty = !this.isEmpty;
    this.nbOfClicks ++;
  }

  ngOnInit() {
  }

}
