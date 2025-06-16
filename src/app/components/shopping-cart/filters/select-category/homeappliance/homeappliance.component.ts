import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service'
import { Product } from 'src/app/models/product';
import { WishlistService } from 'src/app/services/wishlist.service';


@Component({
  selector: 'app-homeappliance',
  templateUrl: './homeappliance.component.html',
  styleUrls: ['./homeappliance.component.css']
})
export class HomeapplianceComponent implements OnInit {

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
      for (let i in pdts){
        //console.log('product : ',pdts[i])
        if(pdts[i].category === "Home Appliance"){
        this.productsList.push(pdts[i]);
        }
      }
      console.log(this.productsList)
    })
     //console.log(this.prodService.getProducts());
  }

  loadWishList(){
    this.wishlistservice.getWishList().subscribe((productIds) => {
      
      this.wishlist = productIds
    })
  }

}
