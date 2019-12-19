import { Component, OnInit } from "@angular/core";

import { Error } from "./error.model";
import { ErrorService } from "./error.service";

@Component({
    selector: 'app-error',
    templateUrl: './error.component.html',
    styles: [`
        .backdrop {
            background-color: rgba(0,0,0,0.6);
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
        }
    `]
})
export class ErrorComponent implements OnInit {
    /**
     * @type Error
     */
    error: Error;

    /**
     * @type {string}
     */
    display:string = 'none';

    /**
     * Constructor for ErrorComponent class
     * @param errorService
     */
    constructor(private errorService: ErrorService) {}

    /**
     * @description set display none
     */
    onErrorHandled() {
        this.display = 'none';
    }

    /**
     * @override handle error id any
     */
    ngOnInit() {
        this.errorService.errorOccurred
            .subscribe(
                (error: Error) => {
                    //TODO handle error and set  display block
                }
            );
    }
}