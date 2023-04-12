import { Component } from '@angular/core';
import { Store } from 'src/app/Models/store';
import { DiscountOffers } from '../../Models/discount-offers'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  discount:DiscountOffers=DiscountOffers.Discount15
  store:Store;
  constructor(){
    this.store=new Store("Imedia Store",["Doki","Nasr City","October"],
    "https://www.imediastores.com/wp-content/uploads/2021/01/whitelogosmall.png")
  }

}
