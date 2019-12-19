import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import {ProductService} from "../components/product/product.service";
import 'rxjs/Rx';
import { Observable } from "rxjs";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { AuthService } from '../auth/auth.service';

@Injectable()
export class CanActivateGuard implements CanActivate {

    constructor(private authService: AuthService) {}
	/**
     * @override canActivate
     * @param route {ActivatedRouteSnapshot}
     * @param state {RouterStateSnapshot}
     * @returns {Observable | boolean}
     */
    canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
        let params: any = route.params;
        console.log("Params::"+JSON.stringify(params.data));
        if (params && eval(params.data)) {
            return true;
        }
        else {
            //TODO show error on browser
            console.error("You are not allowed to access this page.");
            //return false;
        }
        //console.log("Moni11:isLoggedIn()::"+this.authService.isLoggedIn())
        return this.authService.isLoggedIn()
    }
}