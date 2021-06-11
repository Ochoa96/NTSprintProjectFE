import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Uinfo } from '../models/uinfo';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient, private router: Router) { }

  loginServ(userLogin: Uinfo){
    this.http.post("https://localhost:44376/api/account/login", userLogin)
      .subscribe(response => {
        const token = (<any>response).token;
        console.log("jwt", token);
        localStorage.setItem("jwt",token);
        this.router.navigate(["/register"]);
      }, err => {
        console.log("Invalid login", err);
      });
  }
}
