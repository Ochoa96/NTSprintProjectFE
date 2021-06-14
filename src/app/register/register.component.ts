import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UsersService } from '../users/users.service';
import { Router } from '@angular/router';
import { Uinfo } from '../models/uinfo';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnDestroy {
  formCreate: FormGroup;
  createSubscription: Subscription;
  errors: string = "";

  constructor(
    formBuilder: FormBuilder,
    public user_service: UsersService,
    private router: Router
  ) {
    this.formCreate = formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.createSubscription = new Subscription();
  }

  register() {
    this.errors = "";
    const userCreate: Uinfo = {
      user: this.formCreate.value.username,
      password: this.formCreate.value.password,
    };
    this.createSubscription = this.user_service.register(userCreate)
    .subscribe(response => {
      const token = (<any>response).token;
      console.log("jwt", response);
      localStorage.setItem("jwt",token);
      this.user_service.setUser(userCreate.user);
      this.router.navigate(["/home"]);
    }, err => {
      console.log("Invalid Create", err);
      this.errors = JSON.stringify(err);
    });
  }

  ngOnDestroy(): void {
    this.createSubscription.unsubscribe()
  }
}
