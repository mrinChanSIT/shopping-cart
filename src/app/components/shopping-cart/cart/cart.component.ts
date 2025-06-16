import { Component, OnInit, ViewChild } from '@angular/core';
import {MessengerService} from 'src/app/services/messenger.service';
import {CarticonService} from 'src/app/services/carticon.service';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import {CartItem} from 'src/app/models/cart-item'

//import {CartItemComponent} from 'src/app/components/shopping-cart/cart/cart-item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  public cartUnit;
  

  cartItems= [];

  constructor(
    private msg : MessengerService, 
    private ciu : CarticonService,
    private cartService: CartService) { }
  
  cartTotal = 0
  itemsInCart = 0

  ngOnInit(): void {
    this.handleSubscription();
    this.loadCartItems();
    
  }

  handleSubscription() {
    this.msg.getMsg().subscribe((product: Product) => {
      this.loadCartItems();
    })
  }

  loadCartItems() {
    //console.log(this.cartItems)
    this.cartService.getCartItems().subscribe((items : CartItem[]) => {
      console.log(items)
      this.cartItems = items
      //console.log(this.cartItems)
      this.cartBill();
    })
    
  }



cartBill(){
    this.cartTotal = 0
  
      this.cartItems.forEach(item => {
        if(item.qty > 0){

        this.cartTotal += (item.price * item.qty)
        }
      })
}

}
