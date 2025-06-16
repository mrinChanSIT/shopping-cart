import { Injectable } from '@angular/core';
import {Subject} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class CarticonService {
  subject = new Subject()

  constructor() { }

  sendCartLen(cartLen){
    //console.log(cartLen)
    this.subject.next(cartLen)
  }

  getCartLen(){
    return this.subject.asObservable();
  }

}
