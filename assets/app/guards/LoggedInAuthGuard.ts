    import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router} from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class LoggedInAuthGuard implements CanActivate {

	/**
     * @constructor for LoggedInAuthGuard
     * @param authService
     */
    constructor(private authService: AuthService) {}

	 /**
     * @override canActivate
     * @returns {boolean}
     */
    canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
        //TODO check if user is logged in or not
         console.log("Moni:isLoggedIn()::"+this.authService.isLoggedIn())
         return this.authService.isLoggedIn()
    }
}