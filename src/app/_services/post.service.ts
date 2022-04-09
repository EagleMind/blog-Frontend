import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post } from '../_models/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private API_URL = environment.serverUrl;

  constructor(private http: HttpClient) {}

  getPost(id: string): Observable<any> {
    return this.http.get(this.API_URL + 'getPost/' + id);
  }

  createPost(post: Post): Observable<any> {
    return this.http.post(this.API_URL + 'createPost', {
      post: post,
    });
  }

  updatePost(post: Post): Observable<any> {
    return this.http.put(this.API_URL + 'updatePost/' + post.id, {
      post: post,
    });
  }

  deletePost(id: string): Observable<any> {
    return this.http.delete(this.API_URL + 'deletePost/' + id);
  }

  getAllPosts(): Observable<any> {
    return this.http.get(this.API_URL + 'getAllPosts');
  }

  deleteManyPosts(posts: Post[]): Observable<any> {
    let ids: string[] = [];
    posts.forEach((el) => {
      ids.push(el.id);
    });
    return this.http.post(this.API_URL + 'deleteManyPosts', {
      posts: ids,
    });
  }
}
