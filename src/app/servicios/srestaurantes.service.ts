import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SrestaurantesService {

  constructor(private httpclient: HttpClient) { }

  getRestaurantes() {
    return this.httpclient.get('http://localhost:8080/restaurantes');


  }
}
