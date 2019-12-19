import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { AuthService } from "./auth.service";
import { Router } from "@angular/router";
import { User } from "./user.model";

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {

    /**
     * @type {FormGroup}
     */
    signUpForm: FormGroup;

    formInvalid:Boolean= false;
    errorMessage: string;

    /**
     * Constructor for SignUpComponent class
     * @param authService
     * @param router
     */
    constructor(private authService: AuthService, private router: Router) {}

    /**
     * @name  onSubmit handle signup
     */
    onSubmit() {
        const user = new User(
            this.signUpForm.value.email,
            this.signUpForm.value.password,
            this.signUpForm.value.userName
        );
        console.log("this.signUpForm.value.email:"+this.signUpForm.value.email);
        console.log("this.signUpForm.value.password:"+this.signUpForm.value.password);
        console.log("this.signUpForm.value.userName:"+this.signUpForm.value.userName);
        console.log("user:::"+user.userName);

        if(this.signUpForm.valid){
            this.authService.signup(user)
                .subscribe(
                    //TODO handle response and navigate to sign in  and handle error
                    //Monirul-start
                    res => {
                        console.log("SignUpResponse:::"+res);
                        if(res.success){ // if user created successfully
                            // signin the new user
                            console.log("dummySignIn:::"+this.authService.dummySignin(user));
                            this.router.navigate(['signin']);
                        }else{
                            this.errorMessage = res.msg;
                        }
                    }
                   //Monirul-end


            );
            this.signUpForm.reset();
        } else {
            this.formInvalid = true;
        }
    }

    /**
     * @override OnInit lifecycle method
     */
    ngOnInit() {
        this.signUpForm = new FormGroup({
            //TODO add userName, email and password validators here
            //Monirul -start
            userName: new FormControl('', [Validators.required, Validators.minLength(8),Validators.maxLength(20)]),
            email: new FormControl('', [Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+')]),
            password: new FormControl('', [Validators.required, Validators.minLength(6)])
            //Monirul-end
        });
        this.formInvalid = false;
    }
}