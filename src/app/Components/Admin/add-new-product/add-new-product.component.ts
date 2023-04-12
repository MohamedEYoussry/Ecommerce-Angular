import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DiscountOffers } from 'src/app/Models/discount-offers';
import { ICategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductApiService } from 'src/app/Services/product-api.service';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.scss']
})
export class AddNewProductComponent {
  catList:ICategory[];
  DisList:DiscountOffers={} as DiscountOffers;

  prd:IProduct={} as IProduct;


  constructor(private prdApiService:ProductApiService,private router:Router){ 
    this.catList=[
      {ID:1,Name:"Mobile"},
      {ID:2,Name:"LabTop"},
      {ID:5,Name:"Headphone"}
    ]; 

    
   }
  addnewPrd(){
    // let prd:IProduct={
    //   ID:12,
    //   Name:"Moblie",
    //   Price:2522,
    //   Quantity:3,
    //   CategoyID:1,
    //   Img:"https://img.etimg.com/thumb/msid-59424968,width-640,resizemode-4,imgsize-182738/nokia-1100.jpg",
    //   Discount:.01

    // }
    // this.prdApiService.addNewProduct(prd).subscribe({
    //   next:(prd)=>{
    //     // this.router.navigate(['Order'])
    //   },
    //   error:(err)=>{
    //     console.log(err);
        
    //   }
      
    // })
    this.prdApiService.addNewProduct(this.prd).subscribe({
      next:(newPrd)=>{
            //     // this.router.navigate(['Order'])

      },
      error:(err)=>{
        console.log(err);
        
      }

    })


  }
}
