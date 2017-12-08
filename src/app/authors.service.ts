import { AuthorComponent } from './author/author.component';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthorsService {

  constructor() { }

  public getAuthors() {
    let authors: AuthorComponent[] = [];
    
    authors.push(new AuthorComponent("author1"));
    authors.push(new AuthorComponent("author2"));
    authors.push(new AuthorComponent("author3"));

    return authors;
  } 

}
