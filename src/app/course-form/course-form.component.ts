import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {

  constructor() { }

  categories = [
    { id:1, name: 'Development'},
    { id:2, name: 'Art'},
    { id:3, name: 'Languages'}
  ];

  submit(f: NgForm) {
    console.log(f.value);
  }

  ngOnInit() {
  }

}
