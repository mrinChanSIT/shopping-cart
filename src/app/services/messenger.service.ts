import { Injectable } from '@angular/core';
import {Subject} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject = new Subject()

  constructor() { }
  //called from product-item
  sendMsg(product){
    
    this.subject.next(product); // triggering the event
  }

  //called from cart
  getMsg(){
    return this.subject.asObservable();
  }



}
