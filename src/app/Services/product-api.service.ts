import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EnvironmentInjector, Injectable } from '@angular/core';
import { json } from 'express';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
// import { environment } from 'src/environments/environment';
import { IProduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {
  private httpOptions ={}

  constructor(private httpClient: HttpClient) { 
    this.httpOptions={
      headers:new HttpHeaders({"Content-Type":"application/json"})
    }
  }

  getAllProducts():Observable<IProduct[]>{
    // return this.httpClient.get<IProduct[]>("http://localhost:3000/products")
    return this.httpClient.get<IProduct[]>(`${environment.APIBaseURL}/products`)
  }
  getProductsByCategoryID(categoryId:number):Observable<IProduct[]>{
    return this.httpClient.get<IProduct[]>(`${environment.APIBaseURL}/products?CategoyID=${categoryId}`)
  }

  getProductByID(prodID:number):Observable<IProduct[]>{
    return this.httpClient.get<IProduct[]>(`${environment.APIBaseURL}/products?id=${prodID}`)
  }

  // addNewProduct(id:number,name:string,quantity:number,price:number,img:string,catid:number,dis:any):Observable<IProduct[]>{
  //   return this.httpClient.post<IProduct[]>(environment.APIBaseURL}/products`)
  //   // return this.product
  // }
  addNewProduct(product:IProduct):Observable<IProduct[]>{
    return this.httpClient.post<IProduct[]>(`${environment.APIBaseURL}/products`,JSON.stringify(product),this.httpOptions)
  }
}

