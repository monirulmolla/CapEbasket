    import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { User } from "./user.model";
import { ErrorService } from "../errors/error.service";

/**
 * @name AuthService handle signup, signIn and logout
 */
@Injectable()
export class AuthService {
    /**
     * Constructor for AuthService class
     * @param http
     * @param errorService
     */
    constructor(private http: Http, private errorService: ErrorService) {}

    /**
     * @name: signup handle signup
     * @param user
     * @returns {any|Promise<R>|Promise<T|ErrorObservable>|Promise<ErrorObservable>|Promise<T>}
     */
    signup(user: User) {
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type': 'application/json'});
        //return this.http.post('http://localhost:3000/user', body, {headers: headers})
            //TODO map response here and handle error
        console.log("BeforeSignup:::"+user.userName)
        /*
        return this.http.post('http://localhost:3000/user', body, {headers: headers})
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                console.log("AfterSignup:::"+user.userName);
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
            });*/
        return this.http.post('http://localhost:3000/user', body, {headers: headers}).map(res => res.json())
            .catch(error => {
                return Observable.throw(error.json());
            });
    }

    /**
     * @name signin handle sign in
     * @param user
     * @returns {any|Promise<R>|Promise<T|ErrorObservable>|Promise<ErrorObservable>|Promise<T>}
     */
    signin(user: User) {
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type': 'application/json'});
       // return this.http.post('http://localhost:3000/user/signin', body, {headers: headers})
            //TODO map response here and handle error
        /*
        return this.http.post('http://localhost:3000/user/signin', body, {headers: headers})
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                console.log(user);
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
            });
         */
        return this.http.post('http://localhost:3000/user/signin', body, {headers: headers}).map(resp => {
            // login successful if there's a jwt token in the response
            let usr = resp.json();
            console.log(usr);
            if (usr && usr.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(usr));
                return usr;
            }
            }).catch(error => {
                return Observable.throw(error.json());
            });
    }

    dummySignin(user: User){
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type': 'application/json'});
        const resp = this.http.post('http://localhost:3000/user/signin', body, {headers: headers}).map(res => res.json())
            .catch(error => {
                return Observable.throw(error.json());
            });

        console.log("dummySigninResponse:::::"+resp);
   }

    /**
     * @name logout clear local storage
     */
    logout() {
        //TODO clear local storage
        localStorage.removeItem('currentUser');
    }

    /**
     * @name isLoggedIn check user login
     * @returns {boolean}
     */
    isLoggedIn(): boolean {
       const usr = localStorage.getItem("currentUser");
       console.log("Moni:::"+usr)
        //TODO check is user looged in and return
        let isLoggedIn: boolean =false;
        if(localStorage.getItem('currentUser')){
            isLoggedIn = true;
        }
        return isLoggedIn;
    }
}