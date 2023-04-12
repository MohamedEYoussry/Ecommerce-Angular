import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HomeAdsService } from 'src/app/Services/home-ads.service';
import { ProductApiService } from 'src/app/Services/product-api.service';
import { ProductsServiceService } from 'src/app/Services/products-service.service';
import { DiscountOffers } from '../../Models/discount-offers'
import { IProduct } from '../../Models/iproduct';
import { Store } from '../../Models/store';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnChanges, OnDestroy {

  discount: DiscountOffers = DiscountOffers.Discount10 //.noDiscoint hidden

  store: Store;
  ClientName: string = "Mohamed Essam"
  printAds:any;

  // product: IProduct[];

  @Input() receivedCatID: number = 0;
  prodListofCatID: IProduct[] = [];
  @Output() Cart: EventEmitter<any>;


  subscribtion!: Subscription;
  constructor(private prodSerives: ProductsServiceService, private router: Router,
    private homeAds: HomeAdsService, private productAPIService: ProductApiService) {
    this.Cart = new EventEmitter<any>();

    this.store = new Store("Imedia Store", ["Doki", "Nasr City", "October"],
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAtFBMVEX///+NxEIAAAAFBgeHwjCJwjmIwjXr8+Ll79q82JeWyFKHwi7y9e7L37P1+PH7/fnT5b3e7szE3qO9vb309PSXl5dyc3PR0dGwsLCjo6PLy8vf399vb2/X19fCwsKDg4NjZGQfHx8xMTFHSEjq6uooKCirq6taWlpoaWng7dCn0HKx1YS11oubyV6SxknK4a6Pj487PDwVFRYjIyRcXF2czF6hy2io0Xa42JF+vhHA3J3I4akmxQVeAAAI70lEQVR4nO2daVviOhSAaU3CUvZNBGVRHAfKos4FVP7//7pNupc2odg2bZ68Xwahw5PXc5KTpIulkkQikUgkEolEIpFIJBKJRCKRSCQSiUSSU/pP04fBbPjAux3p8PQwX6gmj7zbkjz93pyo3RHUIe/2JM39o2snouHo1dZTbf7yblOSjBYevefhYHq/7Pf7vFuVHONX0w/bzcYCiVn057bf5/uEd2PSoGf7vUx5NyUdHomg4Xfvvtef9B7eh/MBv1Ylx/LZ9Ht14zd+/xCo4t9bAXSiZdZEVZh6aHZB9dkeX/68eku+AIYjrKM6Ig93gZJf+Cy1BP+YP00/nZqovg16EwGq4tQUHJMf3Jq4mN0z/mNReDIFzS44tv3expyblRz9T4/gwBpS5yJNaV6I4BN5/dcM4LObnsvpw3D+MuPVuCR4J0Ezy/xLsCbOXos/lj4RKdPJFPw0w1nqPyyEqPivOEfn5OUbEXyxisPA3cModAwHWPCOSA2JoLWa7925NVFdLIrbD5ekUJC68EAErWA5NfFuWPCKj8dO08rsj3Py7uTT8nssfMmfkEJBYvQPv/wg746tmjhccm1cIpAQknF05rpOTcGPJ75tS4Ql1vrEryZEivTHe3MO9863aQlBAkdOSeBCoZIB0xx71J7vwFa9zqF5CWDIqCp+MXaCadZH1ZOhq58tRJqGdqd9k0srf0HPCRyZmpKwDYmgM4S2ugqAiglE4FTh1dbbmGMbvIbAlUJ9xm/dk/7opGgDIsUL1NZFimMfJympD4+qPfd+dsJq0DoCJQhEbW4Njk3PHmeI6gK/NcJvvVqf1xV4IWigdfk1OSYzO0lHzpC6wK+sTtgM08OAwigaOuo//OI/7IXnLySqb9bHu9AIkig2+DU6Dku7y5EkfcFvkapoFYpTpKARxTLHdl/PFOuMSlYxxEm6dFRLpY4WLajAg/Mt7RaXxl/FwO6GA19/HJmfUvxwEJ0BVdcOPys+Akz+2hMaoxuqd/jFXLUn36XGZZ3wUbO/ZQUUCNB6n8e8/VCtKm+sm8zh5c5N0i1dUAF23FpkSmBMd3Z6O2+TAewzL1kDDR5xyNBjLinKjBAqcGN/jfO7gAgdqqscdUtHbGIPNGNnclpqIJoeZmd/j+4dc3HCnvOSsEt78XtvT9n+uLVCp5QKE81eTnUDhxrrECUfCeuEbmrPY/BWlDXQ1FiCbkdsh4TbsKzxT9gJ3ibEp9NG+AUO3Qy/MA13TENnAh5mSCwBOna5Jmy/Z4Cr4MT4d4TFnvA75ofMbqigvfU9nehjjRFWObXzuTvA7IZXGVqWta8O74S9hN0PUcc6NCpLvZYAbLs52x04MoMI7BazC4tlCU+NvNQRgy+mIbLrQfU6Q8VM2E1eZuqMzmWwtQ+lrbLCLNH2Jw8J22I1GznrfHZhubA0Epb/TJ01qQF2DaizZrDhkkjbcU7YCm0BbLRQtw+8cqAJtQQ6z3xdU4Oola87jiWp6fzi2KRlH/pyDqPHmu2o8AtjI7rt0Fnhl7o3J6mN1qE0Il30yMZDdyD8rR9W5LfNE6XoETz/OoSKZ/KQPZuwRIWKK9hMQlCBW0obUqaNLkZKsPaMfvHmM5EAjid7mrrm34apeceF9k3VPoRaZAMyoP6z0xDEIADWvnGv/MtK4ZL1YNOq+n8uN77043pzDmy8NJNJUQz8KmVK5ft8xVGtWnKG7t5kNpzRFSdB60kKuhP5bDAW+EBnHLOCQUGjoyKgAaDdwnemHZEUOVSjLuB+AoMMArtTtdGp1Mv128h0Ar4yawCoRh9R81d6UMvNTv5VVK38Q8o+9DdbWfvLIIQFujqDcHBzD26Ca5tm46D5eyA65mRv6Wp8C0MIFH2/Mge6VrlTPYDgTBStObc3PsEdXmMuY0xqjFwE4HKWynXWfCubeLuDeTiNFpNYu4M8VwW3wjy/7ePA/sLcEWt3sIghjLmo5d3aW4gj6F6Q4dKqdGwCi62On4x8LqjE6YboopmrtVFULL79M7nKN/Ci8ZonxNo8A8FSsfHOdwKX9wV+d5CXIfvUqIfguvXLJ5FTwzghhEf//w3s2+TTcBWnGwYHmsAOfz4Nf2INpYH9o8A5x3waHpQYwMAa+VgAQ+opNaZh4BKVXBp2hDeMuMgEIi/OMUU0DL8UCurnrgdnNCqgYcR1Fch/e0XLLgoFNIy4RC1g2CywYcRFNAIZRmxgiGMYtYEhjuE+YtotjmHU5U3iGEatnIQxjNzAEMYw8gIuYQyPEYLCGLYiNzBEMYxeOYliWI3cwBDFMPomEkEMKRf7CmJIublHEEPK7QeCGFJO/YphSLuSUgxD2qlfMQxpp37FMIz2E8SQeupXCMOoDQxxDKmnfoUwpJ6REcGQfupXBEP6qV8RDOlPoxHAkHGbpACGjHvTBTBkPF9AAEPGQ6FSMUSZGjIuoknFMNMLN1kPUEjDEGZ6iX+dcR9hGobO422ygUMMM37yIl0wnX6YtpMfxkWlKRhC1t1/CcO4IjEFw6wf1cu4ZTkFQy3rB4DRH3yVgmHmt6fTb6xP3jDre7cvG5e2IYd7baiPFErBkMNJ/HOmu/pcblrcRHfFxA3hT9o2oVQjo5i4ofNk0IxpXzxEIC3DbNeGHpq6FrqdkbRh8F6bLGl2a9rl7czBq6Dtpt5qmPHKKUi9rSuBm7ah3vCyd65kP7V9BE4jw73v07PznYD/cxMr5yMCHkn/3QiI+X7ox57v4+1HaK1+whI2CbJeOVFoGgmbgmWgW/Omsl/7EjYBtGw3MK7ASNhD2AMjbiXjJyZdSbOj7xJK2Bx1wyDl/QlcPNokPjn/W0Or7q8TVsv9s0Kanc2v6gjX5+tdTblxgjcmLCrMn1IqVbrbW+pI/moFjVbnK27C8lxX3EjITJ0aQv6z7lswZurwuoRF+S2GLHDCskMJa0V78pkfdsKiQg0z4ZQpM3UIBRDERM3UwTb3s5kYGEvLHfDt3SHId3cmDYyEhWYs8Z/uOIsUQJfW6qxvD9uvPP35FYlEIpFIJBKJRCKRSCQSiUQikUgkEonE5n+FcaaxRZrKkAAAAABJRU5ErkJggg==")

  }

  ngOnInit(): void {
    // let observer={
    //   next:(data:string)=>{
    //     console.log(data);
    //   },
    //   error:(err:string)=>{
    //     console.log(err);

    //   }, 
    //   complete:()=>{
    //     console.log("Ads Finished");
    //   }
    // }
    // this.homeAds.getSquenceAds(2).subscribe(observer);
    this.productAPIService.getAllProducts().subscribe(products=>{
      this.prodListofCatID=products
    })

    this.subscribtion = this.homeAds.getSquenceAds(1).subscribe({
      next: (data: string) => {
        this.printAds = data
        console.log(data);
      },
      error: (err: string) => {
        console.log(err);
      },
      complete: () => {
        console.log("Ads Finished");
      }
    })
  }

  ngOnChanges(): any {
    // this.getProducts()
    // this.prodListofCatID = this.prodSerives.getProdByCatID(this.receivedCatID)
    //product Api
    

    if (this.receivedCatID == 0) {
      this.productAPIService.getAllProducts().subscribe(data => {
        this.prodListofCatID = data;

      })
    }else {
      this.productAPIService.getProductsByCategoryID(this.receivedCatID).subscribe(data => {
        this.prodListofCatID = data;
      })
    }
  }

  ngOnDestroy(): void {
    this.subscribtion.unsubscribe();

  }
  prodPriceC: number = 0;
  totalPriceC: number = 0;
  prodNameC: string = "";
  prodQuCountC: number = 0;
  prodCart: any = [];

  addtoCart(prodPrice: number, prodQuCount: any, prodName: string): any {
    this.prodNameC = prodName
    this.prodPriceC = prodPrice
    this.prodQuCountC = prodQuCount
    this.totalPriceC += prodPrice * (prodQuCount as number);
    this.prodCart = [this.totalPriceC, this.prodNameC, this.prodQuCountC, this.prodPriceC];
    //  console.log(...this.prodCart);
    this.Cart.emit(this.prodCart)

  }

  openDetails(prodID: number) {
    this.router.navigate(["Order", prodID])
    // this.router.navigateByUrl(`/Order/${prodID}`)
    console.log(prodID);

    console.log("Navigate sucsess");

  }

  hideLogo = true;
  showDiv = false;
  buyClick() {
    this.hideLogo = !true;
    this.showDiv = true
  }


  quantity(product: IProduct, count: any) {
    product.Quantity = product.Quantity - count
    count = 1
  }
}




