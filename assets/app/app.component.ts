import { Component } from '@angular/core';

import { ProductService } from "./components/product/product.service";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    providers: [ProductService]
})
export class AppComponent {
}