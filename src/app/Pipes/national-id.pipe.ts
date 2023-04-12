import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nationalID'
})
export class NationalIDPipe implements PipeTransform {

  transform(value: String,para:any): any {
    if(value!="" && value.length == 14){
      var year =(value.substring(1,3));
      var month =(value.substring(3,5));
      var day =(value.substring(5,7));
      var checkYear= Number(value.substring(0,1))
      if(para=="FullDate") {
        if(checkYear == 2){
          return `${day} ${month} 19${year}  `
        }else{ return `${day} ${month} 20${year}  `}
      }else if(para=="MM"){
        return `${month}`

      }else if(para=="DD"){
        return `${day}`

      }
      else if(para=="YY"){
        return `19${year}`

      }
    }
    else{
      return ""
    }
  }



}
