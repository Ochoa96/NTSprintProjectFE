import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  //user_service: UsersService;

  constructor( private router: Router/*, private us: UsersService*/) {
    //this.user_services = us;
  }

  ngOnInit(): void {
  }

  logout(){
    localStorage.removeItem("jwt");
    this.router.navigate(["login"]);
  }
}
