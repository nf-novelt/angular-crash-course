import { AuthorsService } from './../authors.service';
import { AuthorComponent } from './../author/author.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  private _authors: AuthorComponent[];
  private _authorsService: AuthorsService;

  constructor(authorsService: AuthorsService) {
    this._authorsService = authorsService;
    this._authors = authorsService.getAuthors();
  }

  public getNumberOfAuthors() {
    return this._authors.length;
  }

  public get authors() {
    return this._authors;
  }

  public set authors(authors: AuthorComponent[]) {
    this._authors = authors;
  }

  ngOnInit() {
  }

}
