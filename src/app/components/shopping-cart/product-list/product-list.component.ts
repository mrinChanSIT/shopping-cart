import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service'
import { Product } from 'src/app/models/product';
import { WishlistService } from 'src/app/services/wishlist.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productsList:Product[] = [];

  wishlist:number[] = []
  constructor(
    private prodService: ProductService,
    private wishlistservice: WishlistService) { }

  ngOnInit(): void {
    this.loadProducts()
    this.loadWishList()
  }

  loadProducts(){
    
    this.prodService.getProducts().subscribe((pdts)=>{
      
      this.productsList = pdts ;
      
    })
     console.log(this.prodService.getProducts());
  }

  loadWishList(){
    this.wishlistservice.getWishList().subscribe((productIds) => {
      this.wishlist = productIds
    })
  }
}


