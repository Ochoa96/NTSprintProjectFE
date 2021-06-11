import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Uinfo } from '../models/uinfo';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient, private router: Router) { }

  loginServ(user: Uinfo){
    this.http.post("https://localhost:44376/api/account/login", user)
      .subscribe(response => {
        const token = (<any>response).token;
        console.log("jwt", token);
        localStorage.setItem("jwt",token);
        this.router.navigate(["/"]);
      }, err => {
        console.log("Invalid login", err);
      });
  }/*
  constructor(private http: HttpClient) {}


  login(user: any): Observable<any> {
    return this.http.post("https://localhost:44376/api/account/login", user);
  }*/
}
