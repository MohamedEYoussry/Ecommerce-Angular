import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { AddNewProductComponent } from './Components/Admin/add-new-product/add-new-product.component';
import { ContantUsComponent } from './Components/contant-us/contant-us.component';
import { HomeComponent } from './Components/home/home.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { NationalIDCreditCardComponent } from './Components/national-id-credit-card/national-id-credit-card.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { OrderComponent } from './Components/order/order.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { UserLoginComponent } from './Components/user-login/user-login.component';
import { UserRegisterComponent } from './Components/user-register/user-register.component';

const routes: Routes = [

  {path:"",component:MainLayoutComponent,children:[ 
     {path:"",redirectTo:"/Home",pathMatch:"full"},
    {path:"Home",component:HomeComponent,title:"Home"}, 
   {path:"Order",component:OrderComponent,title:"Products"},
   {path:"Order/:prodID",component:ProductDetailsComponent,title:"Deatils"},
   {path:"newProduct",component:AddNewProductComponent,title:"New Product"},
   {path:"AboutUs",component:AboutUsComponent,title:"AboutUs"},
   {path:"Contatus",component:ContantUsComponent,title:"Contatus"},
   {path:"AddProducts",component:AddProductComponent,title:"Add New Product"},
   {path:"nationalIDAndcreditCard",component:NationalIDCreditCardComponent,title:"NationalID And creditCard"}
   ]},{path:"Register",component:UserRegisterComponent,title:"Register"},
   {path:"Login",component:UserLoginComponent,title:"User Login"},
   {path:"Logout",component:UserLoginComponent,title:"User Logout"},

   {path:"**",component:NotFoundComponent,title:"Not Found"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
