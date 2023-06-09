import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent {
userFormGroup:FormGroup;
myDate: string;

constructor(private formBuilder: FormBuilder,
  ){
// First case
    // this.userFormGroup=new FormGroup({
    //   // fullName:new FormControl('',[Validators.required,Validators.minLength(3),Validators.pattern('[A-Za-z]{3,}')])
    //   fullName:new FormControl('',[Validators.required,Validators.minLength(3)]),
    //   email:new FormControl(''),
    //   mobileNo:new FormControl(''),
    //   password:new FormControl(''),
    //   repassword:new FormControl(''),
    //   address:new FormGroup({
    //     city:new FormControl(''),
    //     street:new FormControl('')
    //   })

    // });

    // Second case
    this.userFormGroup = this.formBuilder.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.email]],
      mobileNo: formBuilder.array([formBuilder.control('')]),
      address: this.formBuilder.group({
        city: [''],
        street: [''],
      }),
      refData: [''],
      refDataOther: [''],
      password: [''],
      repassword: [''],
    });
    this.myDate = new Date().toLocaleDateString();
  }

  // covert fullName to property
  get fullName() {
    return this.userFormGroup.get('fullName');
  }

  get mobileNo() {
    return this.userFormGroup.get('mobileNo') as FormArray;
  }
  addMobile() {
    this.mobileNo.push(this.formBuilder.control(''));
  }
  removeMobile(i: number) {
    this.mobileNo.removeAt(i);
  }}
