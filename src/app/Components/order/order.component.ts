import { Component } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';
import { CategoryService } from 'src/app/Services/category.service';
// import { IProduct } from 'src/app/Models/iproduct';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})

export class OrderComponent {

catList:ICategory[] =[];
selectedCatID:number=0;
cartProductsArr:any= [];

constructor(private catService:CategoryService){
  // this.catList=[
  //   {ID:1,Name:"Mobile"},{ID:2,Name:"Labtop"},{ID:5,Name:"Headphone"}
  // ]
  this.catService.getAllCategories().subscribe(cat=>{
    this.catList=cat
  })
}
cartProducts(cart:any){
  this.cartProductsArr.push(cart)
  // console.log(...this.cartProductsArr);
}

//date pipe
date:Date= new Date();

}
