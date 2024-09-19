import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { Product } from './Product';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }


  saveProduct(product: Product):Observable<Object>{

       let url = 'http://localhost:8090/product/api.1.0/create';

      return  this.http.post(url,product);

  }
}
