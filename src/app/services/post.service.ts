import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';

@Injectable()
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) {}

  getPosts() {
    return this.http.get(this.url).catch(
      (error: Response) => {                
        return Observable.throw(new AppError(error));
      }
    );
  }

  createPost(post) {
    return this.http.post(this.url, JSON.stringify(post)).catch(
      (error: Response) => {                
        return Observable.throw(new AppError(error));
      }
    );
  }

  updatePost(post) {
    return this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true })).catch(
      (error: Response) => {
        if(error.status === 404) {
          return Observable.throw(new NotFoundError(error.json()));
        }        
        return Observable.throw(new AppError(error.json()));
      }
    );
  }

  deletePost(id) {
    return this.http.delete(this.url + '/' + id).catch(
      (error: Response) => {
        if(error.status === 404) {
          return Observable.throw(new NotFoundError(error.json()));
        }        
        return Observable.throw(new AppError(error.json()));
      }
    );
  }

}
