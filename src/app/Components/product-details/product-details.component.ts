import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,  Router } from '@angular/router';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductsServiceService } from 'src/app/Services/products-service.service';
import { Location } from '@angular/common';
import { ProductApiService } from 'src/app/Services/product-api.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent  implements OnInit{
   prod: IProduct[]=[]; //|undefined=undefined 
   prodIdList=this.prodServies.getProdID();
   prdID:number=0;
   currentID:number=0
   currentIndex:number=0;
    foundProd:any;

  constructor(private activedRoute:ActivatedRoute,private prodServies:ProductsServiceService,
    private location: Location,private router:Router,private productAPIService: ProductApiService){}
  ngOnInit(): void {
    {
  //    this.currentID=(this.activedRoute.snapshot.paramMap.get("prodID"))?Number(this.activedRoute.snapshot.paramMap.get("prodID")):0;
  //  let foundProd= this.prodServies.getProdByID(this.currentID)
  // //  console.log(this.prdID);
  //  this.prodIdList = this.prodServies.getProdID()
  // //  console.log(this.prodIdList);
  //  console.log(foundProd);
  //   if(foundProd){
  //     this.prod = foundProd ;
  //     // console.log((this.prod));
  //   }else{
  //     alert("Product Not Found")}
  // }
    }

      this.activedRoute.paramMap.subscribe(paramMap=>{
        this.currentID=paramMap.get('prodID')?Number(paramMap.get('prodID')):0;
                  console.log(this.currentID);

        // console.log(this.currentID);
        
        // let foundProd= this.prodServies.getProdByID(this.currentID)
        this.foundProd  =this.productAPIService.getProductByID(this.currentID).subscribe(data=>{
          // let foundProd = data
          this.foundProd = data
          console.log(this.foundProd);
        console.log(data[0]);
    })
        
        // console.log(this.foundProd);
        
         if(this.foundProd){
           this.prod[0] = this.foundProd ;
         }else{
           alert("Product Not Found")
         }
      })
    }
      
  
  goBack() {
    this.location.back();
  }   
  lastProd(){
   this.currentIndex= this.prodIdList.findIndex((item)=>item==this.currentID) //servies
  this.router.navigate(["/Order",this.prodIdList[--this.currentIndex]])
  }
  nextProd(){
    this.currentIndex= this.prodIdList.findIndex((item)=>item==this.currentID)
    // console.log(this.currentIndex);
    this.router.navigate(["/Order",this.prodIdList[++this.currentIndex]])
    
  }
   
}

