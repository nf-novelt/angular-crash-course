import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';

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
      .subscribe(response => {
        post['id'] = response.json().id;
        
        //Add the post object at the top of this.posts.
        //To add it at the end, use push()
        this.posts.splice(0, 0, post);
        console.log(response.json());
      }, error => {
        alert('An unexpected error occured');
        console.log(error);
      })
  }
  
  updatePost(post) {    
    this.service.updatePost(post)
    .subscribe(response => {      
      console.log(response.json());
    }, error => {
      alert('An unexpected error occured');
      console.log(error);
    })
  }

  deletePost(post) {
    this.service.deletePost(post.id)
      .subscribe(response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      }, error => {
        alert('An unexpected error occured');
        console.log(error);
      })
  }

  ngOnInit() {
    this.service.getPosts()
    .subscribe(response => {
      this.posts = response.json();
    }, error => {
      alert('An unexpected error occured');
      console.log(error);
    })
  }

}
