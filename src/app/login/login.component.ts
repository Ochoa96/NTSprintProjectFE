import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Uinfo } from '../models/uinfo';
import { UsersService } from '../users/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent /*implements OnInit*/ {
  formLogin: FormGroup;

  constructor(
    formBuilder: FormBuilder,
    public user_service: UsersService,
  ) {
    this.formLogin = formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    const userLogin: Uinfo = {
      username: this.formLogin.value.username,
      password: this.formLogin.value.password,
    };

    this.user_service.loginServ(userLogin);
  }

//  ngOnInit(): void {
  //}


}
