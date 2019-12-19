import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";
import {Product}  from './product.model';

/**
 * @ProductService
 * @description
 * this service to handle product
 */

@Injectable()
export class ProductService {

    /**
     * @type {string}
     */
    private productsUrl: string = 'data/products.json';

    /**
     * @type {Product[]}
     */
    public products:Product[];

    /**
     * @type {Product[]}
     */
    myBasket: Product[] = [];

    /**
     * @type {string}
     */
    _currntProductType: string = 'fruits';

    /**
     * Constructor for ProductService class
     * @param http
     */
    constructor(private http: Http) {
    }

    /**
     * @param type
     */
    setCurrentProductType(type: string ) {
        this._currntProductType = type;
    }

    /**
     * @returns {string}
     */
    getCurrentProductType(): string {
        return this._currntProductType;
    }

    /**
     * @returns {Product[]}
     */
    public getMyBasket(): Product[]{
        return this.myBasket;
    }


    /**
     * @description add product to basket and update basket details
     * @param product
     */
    addProductToBasket(product: Product){
        //TODO add product to basket and update its details
        console.log("Added to basket::"+JSON.stringify(product));
        this.myBasket.push(product);
    }

    /**
     *
     * @returns {number} tCount
     */
    getTotalBasketQuantity(): number {
        //TODO return total basket quantity
        //Monirul-start
        let pp:number =0;
        if(this.myBasket.length !== 0) {
            for (const item of this.myBasket) {
                pp = pp + item.basketCount;
            }
            return pp;
        }else{
            return 0;
        }
        //Monirul-end
    }

    /**
     * @description reset basket details
     */
    resetBasket() {
        //TODO rest basket here
        this.myBasket = [];

    }

    /**
     * @param product
     */
    setTotalProductBasketPrice(product: Product) {
        product.basketPrice = product.basketCount * product.price;
    }

    /**
     * @returns {number}
     */
    getTotalPrice(): number {
        //TODO return total price
        //Monirul-start
        let pp:number =0;
        if(this.myBasket.length !== 0) {
            for (const item of this.myBasket) {
                pp = pp + item.basketPrice;
            }
            return pp;
        }else{
            return 0;
        }
        //Monirul-end
    }

    /**
     * @returns {Observable<Product[]>}
     */
    getProduct(): Observable <Product[]>{
        //TODO get products from productUrl
        return this.http.get('http://localhost:3000/'+this.productsUrl).map(resp => {
            // login successful if there's a jwt token in the response
            let product = resp.json();
            console.log("MyProduct::::"+JSON.stringify(product));
            return this.extractProduct(resp);
        }).catch(error => {
            return Observable.throw(error.json());
        });
    }

    /**
     * @param res
     * @returns {Product[]}
     */
    private extractProduct(resp: Response): Product[] {
        let body = resp.json();
        this.products = body.products || { };
        return this.products;
    }

    /**
     * @param error
     * @returns {ErrorObservable}
     */
    private handleError (error: any): Observable<any> {
        //TODO handle and show error
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        return Observable.throw(errMsg);
    }
}