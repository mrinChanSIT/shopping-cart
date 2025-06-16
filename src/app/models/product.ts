export class Product {
    id: number;
    
    name: string;
    description: string;
    price: number;
    qty:number;
    category:string;
    imageUrl: string;
  
    constructor(id, name ,description = '', price = 0, qty = 1,category = "electronics",imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR608TWmLRWFNYPlY5xgKkgZPYe7mwv0GDMDtAS9nRdlVo4aytG') {
      this.id = id
      
      this.name = name
      this.description = description
      this.price = price
      this.category = category
      this.qty = qty
      this.imageUrl = imageUrl
    }
  }
  