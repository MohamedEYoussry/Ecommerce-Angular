import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  // <<<< import it here


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { HomeComponent } from './Components/home/home.component';
import { FooterComponent } from './Components/footer/footer.component';
import { OrderComponent } from './Components/order/order.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ContantUsComponent } from './Components/contant-us/contant-us.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { BorderBoxDirective } from './Directive/border-box.directive';
import { NationalIDPipe } from './Pipes/national-id.pipe';
import { CreditCardPipe } from './Pipes/credit-card.pipe';
import { NationalIDCreditCardComponent } from './Components/national-id-credit-card/national-id-credit-card.component';
import {HttpClientModule } from '@angular/common/http';
import { AddNewProductComponent } from './Components/Admin/add-new-product/add-new-product.component';
import { UserRegisterComponent } from './Components/user-register/user-register.component';
import { UserLoginComponent } from './Components/user-login/user-login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
    SidebarComponent,
    HomeComponent,
    FooterComponent,
    OrderComponent,
    NotFoundComponent,
    AboutUsComponent,
    ContantUsComponent,
    MainLayoutComponent,
    ProductDetailsComponent,
    AddProductComponent,
    BorderBoxDirective,
    NationalIDPipe,
    CreditCardPipe,
    NationalIDCreditCardComponent,
    AddNewProductComponent,
    UserRegisterComponent,
    UserLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
