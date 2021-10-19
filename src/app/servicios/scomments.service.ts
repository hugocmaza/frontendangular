import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ScommentsService {


  constructor(private http: HttpClient ) { }

  getComments() {
    return this.http.get('https://jsonplaceholder.typicode.com/comments');

  }
}
