import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { AuthService } from "./auth.service";

@Component({
    selector: 'app-logout',
    template: `
        <div class="col-md-8 col-md-offset-2">
            <button class="btn btn-danger" (click)="onLogout()">Logout</button>
        </div>
    `
})
export class LogoutComponent implements OnInit {
    /**
     * Constructor for LogoutComponent class
     * @param authService
     * @param router
     */
    constructor(private authService: AuthService, private router: Router) {
    }

    /**
     * @override OnInit lifecycle method
     */
    ngOnInit(){
        this.onLogout();
    }

    /**
     * @name onLogout handle logout and navigate to signin screen
     */
    onLogout() {
        this.authService.logout();
        //TODO navigate to sign in screen to login again
        this.router.navigate(['/', 'signin']);
    }
}