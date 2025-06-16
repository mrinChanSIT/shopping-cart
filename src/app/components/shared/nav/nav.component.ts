import { Component, OnInit } from '@angular/core';
import {CarticonService} from 'src/app/services/carticon.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private ciu : CarticonService) { }

  ngOnInit(): void {
    this.ciu.getCartLen().subscribe((cartLen : Number)=>{
      //console.log((cartLen))
       
      document.getElementById('itemNo').setAttribute("value",String(cartLen))
    })
  }

  onclickNoofCartItems(){

  }

}
