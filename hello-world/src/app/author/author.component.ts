import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  private _name :string;

  constructor(name: string) {
    this._name = name;
   }

  ngOnInit() {
  }

  public get name() {
    return this._name;
  }

  public set name(name: string) {
    this._name = name;
  }  

}
