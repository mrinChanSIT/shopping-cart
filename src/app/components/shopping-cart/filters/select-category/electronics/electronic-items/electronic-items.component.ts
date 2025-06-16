import { Component, OnInit, Input } from '@angular/core';
import {Product} from 'src/app/models/product';
import {MessengerService} from 'src/app/services/messenger.service';
import {CartService} from 'src/app/services/cart.service';
import {WishlistService} from 'src/app/services/wishlist.service'
import { productsUrl } from 'src/app/config/api';
import { CartItem } from 'src/app/models/cart-item';

@Component({
  selector: 'app-electronic-items',
  templateUrl: './electronic-items.component.html',
  styleUrls: ['./electronic-items.component.css']
})
export class ElectronicItemsComponent implements OnInit {

  @Input() pdtItem : Product

  @Input() addedtoWishList : boolean

  @Input() id
  constructor(
    private msg: MessengerService,
    private cartService : CartService,
    private wishListService : WishlistService

    ) { }

  ngOnInit(): void {
  }

  addToCart(){
    console.log(document.getElementById('this.pdtItem.id'))
    this.cartService.addProductToCart(this.pdtItem).subscribe(()=>{
      this.msg.sendMsg(this.pdtItem);
    })
    
  }

  onclickAddToWishList() {
    this.wishListService.addToWishList(this.pdtItem.id).subscribe(()=>{
      this.addedtoWishList = true;
    })
  }

  onclickRemoveFromWishList(){
    this.wishListService.removeFromWishList(this.pdtItem.id).subscribe(()=>{
      this.addedtoWishList = false;
    })
  }
}
