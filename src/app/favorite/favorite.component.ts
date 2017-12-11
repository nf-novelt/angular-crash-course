import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  @Input('is-favorite') isFavorite = true;
  @Output('change') change = new EventEmitter();
  nbOfClicks = 0;

  constructor() { }

  onClick() {
    this.isFavorite = !this.isFavorite;
    this.change.emit(this.isFavorite);
    this.nbOfClicks ++;
  }

  ngOnInit() {
  }

}
