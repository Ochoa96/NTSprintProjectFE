import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Uinfo } from '../models/uinfo';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  API_URL: string = "https://localhost:44376";
  private user : any;

  constructor(private http: HttpClient, private router: Router) {
    this.user = localStorage.getItem("user");
  }

  login(user: Uinfo){
    return this.http.post(this.API_URL + "api/account/login", user)
  }

  register(user: Uinfo){
    return this.http.post(this.API_URL + "api/account/create", user)
  }

  setUser( user : any ){
    this.user = user;
    localStorage.setItem("user",user);
  }

  getUser(){
    return this.user;
  }
}
