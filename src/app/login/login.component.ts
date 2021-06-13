import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Uinfo } from '../models/uinfo';
import { UsersService } from '../users/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnDestroy {
  formLogin: FormGroup;
  loginSubscription: Subscription;
  errors: string = "";

  constructor(
    formBuilder: FormBuilder,
    public user_service: UsersService,
    private router: Router
  ) {
    this.formLogin = formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.loginSubscription = new Subscription();
  }

  login() {
    const userLogin: Uinfo = {
      user: this.formLogin.value.username,
      password: this.formLogin.value.password,
    };

    this.loginSubscription = this.user_service.login(userLogin)
    .subscribe(response => {
      const token = (<any>response).token;
      console.log("jwt", token);
      localStorage.setItem("jwt",token);
      this.router.navigate(["/home"]);
    }, err => {
      console.log("Invalid login", err);
      this.errors = JSON.stringify(err);
    });
  }

  ngOnDestroy(): void {
    this.loginSubscription.unsubscribe()
  }


}
