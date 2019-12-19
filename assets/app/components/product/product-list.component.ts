import { Component, OnInit} from '@angular/core';
import { Router } from "@angular/router";
import { ProductService } from './product.service';
import { ErrorService } from '../../errors/error.service';
import {Product} from './product.model';
import { ProductFilter } from './product.filter';
/**
 * @component
 * @description
 * this is to show product list  for different type of products in product detail screen
 */
@Component({
    selector: 'product-list-component',
    templateUrl: './product-list.component.html'

})
export class ProductListComponent implements OnInit {

    errorMessage:string;
    /**
     * Constructor for ProductListComponent class
     * @param router
     * @param _productService
     * @param errorService
     */
    constructor(private router: Router,private _productService: ProductService, private errorService: ErrorService){
    }

    /**
     * @type {string}
     */
    searchMe: string = '';

    /**
     *
     * @type {string}
     */
    currentProductType: string;

    /**
     *
     * @type {string}
     */
    currentCategory: string;

    /**
     *
     * @type {string}
     */
    totalItems: number = 0;

    /**
     *
     * @type {Product[]}
     */
    fruits: Product[]=[];

    /**
     *
     * @type {Product[]}
     */
    vegetables: Product[]=[];

    /**
     *
     * @type {Product[]}
     */
    grocery: Product[]=[];

    /**
     * @override OnInit
     */
    ngOnInit(){
        this.getProduct();
    }

    /**
     * @description get product and set types of products
     */
    getProduct() {
        this._productService.getProduct().subscribe(
                //TODO handle response and error here
            resp => {
                console.log("ProdREsp:::"+JSON.stringify(resp));
                if(resp){
                    this.setProducts(resp);
                }else{
                    this.errorMessage = "";
                }
            }
        )
    }

    /**
     * @description set  products type
     * @param res
     */
    setProducts =  function(res){
        this.fruits = res.fruits;
        this.vegetables = res.vegetables;
        this.grocery = res.grocery;
        this.totalItems = this._productService.getTotalBasketQuantity();
    }

    /**
     * @description handle error
     * @param error
     */
    logError = function(error) {
        this.errorService.handleError(error);
    }

    /**
     * @returns {Product[]|any}
     */
    getCurrentProductType =  function (): Product {
        this.currentProductType = this._productService.getCurrentProductType();
        this.currentCategory = this.currentProductType.substring(0,1).toUpperCase() + this.currentProductType.substring(1) + " ";
        //TODO return category type object
        //Monirul -start
        console.log("myCurrentProductType:::"+this.currentProductType);
        if(this.currentProductType =='fruits'){
            console.log("myCurrentProductSize:::"+this.fruits.length);
            return this.fruits;
        }else if(this.currentProductType =='vegetables'){
            console.log("myCurrentProductSize:::"+this.vegetables.length);
            return this.vegetables;
        }else if(this.currentProductType =='grocery'){
            console.log("myCurrentProductSize:::"+this.grocery.length);
            return this.grocery;
        }
        //Monirul -end
    }

    /**
     * @description route to basket screen
     */
    onBasketClicked = function(){
        //TODO handle basket click
        this.router.navigate(['basket']);
    }

    /**
     * @description add product to basket
     * @param product
     */
    onAddToBasket = function(product: Product){
        //TODO  add product to basket
        console.log("Am inside add to basket");
        product.basketCount =1;
        product.basketPrice = product.price;
        this._productService.addProductToBasket(product);
        this.totalItems++;
    }

}