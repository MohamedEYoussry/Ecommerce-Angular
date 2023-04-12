import { Component, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductsServiceService } from 'src/app/Services/products-service.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  @Output() receivedCatID: number = 0;

  prdListOfCat: IProduct[] = [];


constructor(private prodSerives:ProductsServiceService,private router:Router){

}
// ngOnChanges(): void {
//   // this.getProducts()
//  this.prodListofCatID = this.prodSerives.getProdByCatID(this.receivedCatID)
// }



ngOnChanges(): void {

  // this.getProductsOfCat();
  // this.prdListOfCat=this.prodSerives.addNewProduct();
}
  prodName:any;
  prodImg:any;
  prodQ:any;
  prodcat:any;
  prodDis:any;
  prodID:any;
  prodPrice:any;
  addNewProduct:any=[]
  
  addNewProd(ID:any,Name:any,Quantity:any,price:any,Img:any,Categoy:any,Discount:any){
    this.prodID=ID
    this.prodName=Name
    this.prodQ=Quantity
    this.prodPrice=price
    this.prodImg=Img
    this.prodcat=Categoy
    this.prodDis=Discount
    this.addNewProduct = this.prodSerives.addNewProduct( this.prodID,this.prodName, this.prodQ,this.prodPrice,this.prodImg,this.prodcat,this.prodDis)

    
  }

}
