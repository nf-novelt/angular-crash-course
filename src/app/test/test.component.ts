import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempor dapibus tempor. Pellentesque ullamcorper a neque quis egestas. Vivamus non felis in lectus fringilla interdum eu at mauris";

  constructor() { }

  ngOnInit() {
  }

}
