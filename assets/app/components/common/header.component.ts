import { Component } from "@angular/core";
import { AuthService } from "../../auth/auth.service";

/**
 * @component
 * @description
 * header for e-basket with links
 */
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    /**
     * Constructor for HeaderComponent class
     * @param authService
     */
    constructor(private authService :AuthService) {}
}