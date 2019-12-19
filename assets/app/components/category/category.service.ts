import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";
import { Category } from "./category.model";

/**
 * @CategoryService
 * @description
 * this service to handle category
 */

@Injectable()
export class CategoryService {

    /**
     * @type {Category[]}
     * @default []
     */
    private categories: Category[] = [];

    /**
     * @type {string}
     */
    private categoryUrl: string = 'data/category.json';

    /**
     * Constructor for CategoryService class
     * @param http
     */
    constructor(private http: Http) {
    }

    /**
     * @name handleError handle error
     * @param error
     * @returns {ErrorObservable}
     */
    private handleError (error: any): Observable<any> {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        return Observable.throw(errMsg);
    }

    /**
     * @name extractCategory get catory from response
     * @param res
     * @returns {Category[]}
     */
    private extractCategory(res: Response): Category[] {
        let body = res.json();
        this.categories = body.categories || { };
        return this.categories;
    }

    /**
     * @name getCategory get category data from json file
     * @returns {any|Promise<R>|Promise<T|Observable<any>>|Promise<Observable<any>>|Promise<T>}
     */
    getCategory(): Observable <Category[]>{
        //TODO get category from categoryUrl
        return this.http.get('http://localhost:3000/'+this.categoryUrl).map(resp => {
            // login successful if there's a jwt token in the response
            let usr = resp.json();
            console.log("MyCategory::::"+JSON.stringify(usr));
            return this.extractCategory(resp);
        }).catch(error => {
            return Observable.throw(error.json());
        });
    }

}