import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs';
import {Product} from '../models/product'

import {productsUrl} from 'src/app/config/api'

@Injectable ({
  providedIn: 'root'
})

export class ProductService {
  
  
  
  constructor(private http : HttpClient) { }

  getProducts(): Observable<Product[]>{
    //TODO : populate products from API and return an observable
    return this.http.get<Product[]>(productsUrl);
  }
}
