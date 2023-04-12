import { Injectable } from '@angular/core';
import { DiscountOffers } from '../Models/discount-offers';
import { IProduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {
  product: IProduct[];
  discount: DiscountOffers = DiscountOffers.Discount10 //.noDiscoint hidden
  


  constructor() { 
    this.product=[
  {ID:1,Name:"Samsung Galaxy S23 Ultra 12GB Ram 512GB",Quantity:4,Price:55900,
  Img:"https://www.imediastores.com/wp-content/uploads/2023/02/Samsung-Galaxy-S23-Ultra-12GB-Ram-512GB-9.jpg",CategoyID:1,Discount:DiscountOffers.Discount10}
  ,
  {ID:2,Name:"Samsung Galaxy Z Fold4 5G 12GB Ram 256GB",Quantity:4,Price:42900,
  Img:"https://www.imediastores.com/wp-content/uploads/2022/09/Samsung-Galaxy-Z-Fold4-7.jpg",CategoyID:1,Discount:DiscountOffers.NoDiscount},
  {ID:3,Name:"Apple iPhone 14 Pro Max",Quantity:1,Price:45000,
  Img:"https://www.imediastores.com/wp-content/uploads/2022/09/Apple-iphone-14-pro-4.jpg",CategoyID:1,Discount:DiscountOffers.Discount15},
  {ID:4,Name:"Apple iPhone 14",Quantity:2,Price:31999,
  Img:"https://www.imediastores.com/wp-content/uploads/2022/09/Apple-iphone-14-2.jpg",CategoyID:1,Discount:DiscountOffers.Discount10},
  {ID:5,Name:"Lenovo IdeaPad 5 14ALC05 Laptop 14″ FHD (AMD Ryzen 7-5700U 1.8GHz /512GB SSD/8GB RAM)",Quantity:0,Price:19999,
  Img:"https://www.imediastores.com/wp-content/uploads/2022/11/Lenovo-IdeaPad-5-14ALC05-Laptop-14-10.jpg",CategoyID:2,Discount:DiscountOffers.Discount10},
  {ID:6,Name:"Lenovo IdeaPad Gaming 3 15ACH6 Laptop 15.6″ FHD (AMD Ryzen 5-5600H 3.3GHz /512GB SSD/8GB RAM)",Quantity:1,Price:24500,
  Img:"https://www.imediastores.com/wp-content/uploads/2022/11/Lenovo-IdeaPad-Gaming-3-15ACH6-Laptop-15.6-8.jpg",CategoyID:2,Discount:DiscountOffers.NoDiscount},
  {ID:7,Name:"Apple Macbook Air 13-inch M2 chip with 8-Core CPU 10-Core GPU /8GB /512GB",Quantity:1,Price:59000,
  Img:"https://www.imediastores.com/wp-content/uploads/2022/10/MacBook-Air-13-M2-Chip-with-8-Core-CPU-8-Core-GPU-256GB-Storage-8.jpg",CategoyID:2,Discount:DiscountOffers.Discount10},
  {ID:8,Name:"Apple AirPods Pro (2nd generation) With MagSafe Charging Case",Quantity:1,Price:8999,
  Img:"https://www.imediastores.com/wp-content/uploads/2022/09/Apple-AirPods-Pro-2nd-generation-5.jpg",CategoyID:5,Discount:DiscountOffers.Discount15},
  {ID:9,Name:"Bose Sleepbuds II Truly Wireless Noise Canceling Earbuds",Quantity:2,Price:9499,
  Img:"https://www.imediastores.com/wp-content/uploads/2023/02/Bose-Sleepbuds-II-Truly-Wireless-Noise-Canceling-Earbuds-9.jpg",CategoyID:5,Discount:DiscountOffers.NoDiscount},
  {ID:10,Name:"Sony WH-1000XM5 Wireless Noise Cancelling Headphone",Quantity:3,Price:17499,
  Img:"https://www.imediastores.com/wp-content/uploads/2022/10/Sony-WH-1000XM5-Wireless-Noise-Cancelling-Headphone-9.jpg",CategoyID:5,Discount:DiscountOffers.Discount15}
]  
  }
  getAllProducts():IProduct[]{
    return this.product
  }
  getProdByCatID(catID:number):IProduct[]{
    // if (catID == 0) {
      return this.getAllProducts()
      
    // }else{
    //   return this.product.filter(prod=>prod.CategoyID==catID)

    // }

  }
  getProdByID(ProdID:number):IProduct[]|undefined{
      return this.product.filter(product=>product.ID==ProdID)  
  }

  addNewProduct(id:number,name:string,quantity:number,price:number,img:string,catid:number,dis:any):IProduct|any{
    this.product.push({ID:id,Name:name,Quantity:quantity,Price:price,Img:img,CategoyID:catid,Discount:dis})
    return this.product
  }

  getProdID():number[]{
    return this.product.map(product=>product.ID)  
  }

}
