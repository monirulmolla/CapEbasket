import { Component, OnInit} from '@angular/core';
import { Router } from "@angular/router";
import { ProductService } from '../product/product.service';
import {Product} from '../product/product.model';

@Component({
    selector: 'product-list-component',
    templateUrl: './basket.component.html'

})

/**
 * @component
 * @description
 * This component will show all the added products and its detail.
 */
export class BasketComponent implements OnInit {

    /**
     * Constructor for BasketComponent class
     * @param router
     * @param _productService
     */
    constructor(private router: Router, private _productService: ProductService){
    }

    /**
     * @type {Product[]}
     */
    myBasket: Product[];

    /**
     * @type {Number}
     */
    quantity:Number = 0;

    /**
     * @type {Number}
     */
    totalPrice:Number = 0;

    /**
    * @override OnInit
     */
    ngOnInit(){
        this.myBasket = this._productService.getMyBasket();
        this.updateBasket();
    }

    /**
     * @name onRemoveBasketItem remove item from myBasket and update basket
     * @param item
     */
    onRemoveBasketItem = function(item) {
        //TODO basket and  update basket;
        this.myBasket.splice(this.myBasket.indexOf(item), 1);
        this.quantity = this.quantity - item.basketCount;
        this.totalPrice = this.totalPrice - item.basketPrice;
    }

    /**
     * @name onBackToMart navigate to home screen
     */
    onBackToMart = function() {
        this.router.navigate(['/', 'home']);
    }

    /**
     * @name onCheckout alert for payment
     */
    onCheckout = function() {
        this.router.navigate(['/', 'checkout']);
    }

    /**
     * @name onClearCart clear all items from the cart
     */
    onClearCart = function() {
        //TODO reset basket
        this.myBasket = [];
        this._productService.resetBasket();
        this.updateBasket();
    };

    /**
     * @name updateBasket update quantity and total price
     */
    updateBasket = function() {
        //TODO get quantity and total price
        if(this.myBasket.length !== 0) {
            for (const item of this.myBasket) {
                this.quantity = this.quantity + item.basketCount;
                this.totalPrice = this.totalPrice + item.basketPrice;
            }
        }else{
            this.quantity=0;
            this.totalPrice=0;
        }
    }

}