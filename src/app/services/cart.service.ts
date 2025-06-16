import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item';
import {HttpClient} from '@angular/common/http'
import {Observable, observable} from 'rxjs'
import { cartUrl } from '../config/api';
import { map } from 'rxjs/operators';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http : HttpClient) { }

  getCartItems(): Observable<CartItem[]> {
    //TODO: Mapping the obtained result to our CartItem props. (pipe() and map())
    return this.http.get<CartItem[]>(cartUrl).pipe(
      map((result: any[]) => {
        //console.log(result)
        let cartItems: CartItem[] = [];

        for (let item of result) {
          let productExists = false

          //console.log(item)

          for (let i in cartItems) {
            //console.log(cartItems[i])
            if (cartItems[i].productId === item.product.id) {
              cartItems[i].qty++
              productExists = true
              break;
            }
          }

          if (!productExists) {
            cartItems.push(new CartItem(item.id, item.product));
          }
        }
        //console.log(cartItems)
        return cartItems;
      })
    );
  }

  addProductToCart(product: Product): Observable<any> {
    //console.log(this.http.get(cartUrl)
    //console.log(product)
    return this.http.post(cartUrl, { product });
    
  }

  removeProductfromCart(product: CartItem) {
    console.log(product)
    //let pdtqty = product.qty;
    //console.log(typeof(this.http.delete(cartUrl + '/' + (product.id)) ))
    
    return this.http.delete(cartUrl +'/'+ product.id)
  }
}
