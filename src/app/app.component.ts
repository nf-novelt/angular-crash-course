import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //could come from server:
  post = {
    title: "Title",
    isFavorite: false
  }

  onFavoriteChanged(isFavorite) {
    console.log("Favorite changed ", isFavorite);
  }
}
