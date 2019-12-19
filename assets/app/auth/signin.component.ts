import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { User } from "./user.model";
import { AuthService } from "./auth.service";

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html'
})
export class SigninComponent implements OnInit {

    /**
     * @type {FormGroup}
     */
    signInForm: FormGroup;
    errorMessage: string;

    /**
     * Constructor for SignInComponent class
     * @param authService
     * @param router
     */
    constructor(private authService: AuthService, private router: Router) {}

    /**
     * @name  onSubmit handle signin
     */
    onSubmit() {
        const user = new User(this.signInForm.value.email, this.signInForm.value.password);
        this.authService.signin(user)
            .subscribe(
                //TODO handle response data  and error here
                //Monirul-start
                resp => {
                    console.log("MysigninREsp:::"+JSON.stringify(resp));
                    if(resp.token){
                        this.router.navigate(['home']);
                    }else{
                        this.errorMessage = resp.msg;
                    }
                }
                //Monirul-end
            );
        this.signInForm.reset();
    }

    /**
     * @name onSignUp navigate to sign up screen
     */
    onSignUp() {
        this.router.navigate(['/', 'signup']);
    }

    /**
     * @override OnInit lifecycle method
     */
    ngOnInit() {
        this.signInForm = new FormGroup({
            //TODO add email and password validator here
            //Monirul -start
            email: new FormControl('', [Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+')]),
            password: new FormControl('', [Validators.required, Validators.minLength(6)])
            //Monirul-end
        });
    }
}