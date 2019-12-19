// angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import {AppRoutingModule} from './app.routing'

// Category
import { CategoryComponent } from "./components/category/category.component";
import { CategoryService } from "./components/category/category.service";
import { CategoryListComponent } from "./components/category/category-list.component";

//Product
import { ProductListComponent } from "./components/product/product-list.component";
import { ProductFilter } from './components/product/product.filter';
import { ProductService } from './components/product/product.service';

//Basket
import { BasketComponent } from "./components/basket/basket.component";

//checkout
import {CheckoutComponent} from "./components/checkout/checkout.component";

//Common
import { HeaderComponent } from "./components/common/header.component";

//app
import { AppComponent } from "./app.component";

//auth
import { LogoutComponent } from "./auth/logout.component";
import { SignupComponent } from "./auth/signup.component";
import { SigninComponent } from "./auth/signin.component";
import { AuthService } from "./auth/auth.service";


//guard
import {LoggedInAuthGuard} from "./guards/LoggedInAuthGuard";
import {CanActivateGuard} from "./guards/CanActivateGuard";
import {CanAlwaysActivateGuard} from "./guards/CanAlwaysActivateGuard";

//error handling
import { ErrorComponent } from "./errors/error.component";
import { ErrorService } from "./errors/error.service";

@NgModule({
    declarations: [
        AppComponent,
        CategoryComponent,
        CategoryListComponent,
        CheckoutComponent,
        ProductListComponent,
        BasketComponent,
        HeaderComponent,
        LogoutComponent,
        SignupComponent,
        SigninComponent,
        ErrorComponent,
        ProductFilter
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        AppRoutingModule
    ],
    providers: [
        LoggedInAuthGuard,
        CanAlwaysActivateGuard,
        CanActivateGuard,
        AuthService,
        ProductService,
        ErrorService,
        CategoryService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}