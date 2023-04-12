import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCard'
})
export class CreditCardPipe implements PipeTransform {

  transform(value: String): String {
    if(value!="" && value.length == 16){
      var firstFour =(value.substring(0,4));
      var secFour =(value.substring(4,8));
      var thiFour =(value.substring(8,12));
      var fFour =(value.substring(12,16))
      return `${firstFour}-${secFour}-${thiFour}-${fFour}`
    }else{
      return ""
    }

  }}
