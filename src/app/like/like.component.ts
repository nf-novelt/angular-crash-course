import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  @Input() likesCount = 0;
  @Input() isActive = false;

  constructor() { }

  onClick() {
    if(this.isActive) {
      this.likesCount --;
    }
    else {
      this.likesCount ++;
    }

    this.isActive = !this.isActive;
  }

  ngOnInit() {
  }

}
