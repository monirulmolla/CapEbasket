import { Component, OnInit, OnChanges} from '@angular/core';
import { Router } from "@angular/router";
import {AuthService} from '../../auth/auth.service';
import {ProductService} from '../../components/product/product.service';
import {Product} from '../../components/product/product.model';
@Component({
    selector: 'checkout-component',
    templateUrl: './checkout.component.html'

})

/**
 * @component
 * @description
 * This component will show all the added products and its detail.
 */
export class CheckoutComponent implements OnInit{

    /**
     * @type {string}
     */
    paymentMessage: string = '';
    /**
     * Constructor for CheckoutComponent class
     * @param authService {AuthService}
     * @param productService {ProductService}
     */
    constructor(private authService: AuthService, private productService: ProductService){
        this.myBasket = this.productService.getMyBasket();
    }

	/**
	*@type {Product[]}
	*/
    myBasket: Product[];
	
    /**
    * @override OnInit
     */
    ngOnInit(){
        let items: string = this.myBasket.length ? 'for below items' : '';
        //TODO add payement message here to show in browser
        this.paymentMessage = "Checkout payment here";
    }
}