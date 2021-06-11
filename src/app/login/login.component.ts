import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Uinfo } from '../models/uinfo';
import { UsersService } from '../users/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;

  constructor(
    formBuilder: FormBuilder,
    private userService: UsersService,
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

    this.userService.loginServ(userLogin);
  }

  ngOnInit(): void {
  }

}
