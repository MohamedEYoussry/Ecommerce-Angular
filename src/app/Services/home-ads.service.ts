import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeAdsService {

  private adsList: string[]
  constructor() {
    this.adsList = ["Sale up to 50%", "Up to 40% Mother's Day Gifts", "Up to 50% RAMADAN SALE","Use ramadan10 for 10% Discount"] //"",
  }

  getSquenceAds(intervalSecNum:number):Observable<string>{
    return new Observable<string>((observer)=>{
    
      let counter =0;
      let adsTimer=setInterval(()=>{
        if(counter==this.adsList.length){
          observer.complete();
        }
        if(this.adsList[counter]==""){
          observer.error("*ERROR* Empty AD");
        }
        observer.next(this.adsList[counter]); //array index of 0 
        counter++
     
      },intervalSecNum*1000)
      return {
        unsubscribe() {
         clearInterval(adsTimer) 
         console.log("In unsubscribe case.....");
         
        }
      }
    } )

  }

}
