import { DiscountOffers } from '../Models/discount-offers'

export interface IProduct  {
    ID:number
    Name:string
    Quantity :number 
    Price:number
    Img:string
    CategoyID:number
    Discount:DiscountOffers

}
