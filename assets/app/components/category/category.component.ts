import { Component, Input } from '@angular/core'
import { Router } from "@angular/router";
import {ProductService} from '../product/product.service';
import { Category } from './category.model'

/**
 * @component
 * @description
 * header for e-basket with links
 */
@Component ({
    selector : 'category-component',
    templateUrl: './category.component.html'
})
export class CategoryComponent {

    /**
     * @type Category
     */
    @Input() category: Category;

    /**
     * Constructor for CategoryComponent class
     * @param router
     * @param _productService
     */
    constructor (private router: Router, private _productService: ProductService) {
    }

    /**
     * @name onViewAllClicked set product type and navigate to product list
     * @param type
     */
    onViewAllClicked(type: string) {
        //TODO navigate to product list
        this._productService.setCurrentProductType(type);
        //this._productService.getProduct();
        this.router.navigate(['productlist']);

    }
}