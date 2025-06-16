import { Component, OnInit ,Input, Output, EventEmitter } from '@angular/core';
import {CartService} from 'src/app/services/cart.service'
import {MessengerService} from 'src/app/services/messenger.service'
import { Product } from 'src/app/models/product';



@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() cartUnit
  productUnit: Product


  //pdtQty = [];
  @Output() public childevent = new EventEmitter()
  constructor(
    private msg: MessengerService,
    private cartService : CartService
    ) { }

  
  ngOnInit(): void {
    
  }
  
  onclickDeleteItemfromCart(){
   
    this.productUnit = this.cartUnit
    //console.log(this.productUnit)

    this.cartService.removeProductfromCart(this.cartUnit).subscribe(()=>{
      this.msg.sendMsg(this.cartUnit)
    })
    
  
  }



}
