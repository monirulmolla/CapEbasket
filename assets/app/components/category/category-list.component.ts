import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Category } from "./category.model";
import { CategoryService } from "./category.service";
import { AuthService } from "../../auth/auth.service";
import { ErrorService } from "../../errors/error.service";

/**
 * @component
 * @description
 * handle different category list
 */
@Component({
    selector: 'category-list-component',
    templateUrl: './category-list.component.html'
})
export class CategoryListComponent implements OnInit {
    /**
     * @type  {Category[]}
     */
    categories: Category [];
    errorMessage:string;

    /**
     * Constructor for CategoryListComponent class
     * @param _categoryService
     * @param _authService
     * @param errorService
     * @param router
     */
    constructor(private _categoryService: CategoryService, private _authService: AuthService, private errorService: ErrorService, private router: Router ) {}

    /**
     * @override ngOnIit and get category if user logged in or navigate to signin
     */
    ngOnInit() {
        this.getCategory();
    }

    /**
     * @name get category data
     */
    getCategory() {
        this._categoryService.getCategory().subscribe(
                //TODO handle response and error here
            resp => {
                this.categories = resp;
                console.log("MysigninREsp:::"+JSON.stringify(resp));
                if(resp){
                    //this.router.navigate(['home']);
                }else{
                    this.errorMessage = "";
                }
            }
        )
    }

    /**
     * @name logError handle error
     * @param error
     */
    logError = function(error) {
        //TODO hande error

    }
}