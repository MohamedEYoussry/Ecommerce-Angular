import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBorderBox]'
})
export class BorderBoxDirective {

  constructor(private ele:ElementRef) { 

    ele.nativeElement.style.border="5px solid lightblue"
    ele.nativeElement.style.borderRadius ="40px"
    ele.nativeElement.style.boxShadow="rgba(0, 0, 0, 0.6) 20px 20px 20px 0px"
  }
@HostListener("mouseover") mouseOver(){
  this.ele.nativeElement.style.boxShadow="rgba(0, 0, 0, 1) 30px 30px 30px 0px"
}
@HostListener("mouseout") mouseOut(){
  this.ele.nativeElement.style.boxShadow="rgba(0, 0, 0, 0.6) 20px 20px 20px 0px"
}
}
