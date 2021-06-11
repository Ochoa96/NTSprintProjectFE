import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  username: string = "";
  email: string = "";
  password: string = "";

  constructor() { }

  register() {
    console.log(this.username);
    console.log(this.email);
    console.log(this.password);
  }

  ngOnInit(): void {
  }

}
