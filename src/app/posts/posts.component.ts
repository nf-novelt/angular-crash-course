import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts:any[];  

  constructor(private service: PostService) {
    
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value }
    input.value = '';

    this.service.createPost(post)
      .subscribe(
        response => {
          post['id'] = response.json().id;
          
          //Add the post object at the top of this.posts.
          //To add it at the end, use push()
          this.posts.splice(0, 0, post);
          console.log(response.json());
      },
        (error: AppError) => {
          if(error instanceof BadInput) {            
            alert('This post has already been deleted');
            //or for example: this.form.setErrors(error.originalError);
          }
          else throw error;
        }
    )
  }
  
  updatePost(post) {    
    this.service.updatePost(post)
    .subscribe(
      response => {      
        console.log(response.json());
      })
  }

  deletePost(post) {
    this.service.deletePost(345)
      .subscribe(
        response => {
          let index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
        },
        (error: AppError) => {
          if(error instanceof NotFoundError) {            
            alert('This post has already been deleted');
            //or for example: this.form.setErrors(error.json());
          }
          else throw error;
      })
  }

  ngOnInit() {
    this.service.getPosts()
    .subscribe(
      response => {
        this.posts = response.json();
      })
  }

}
