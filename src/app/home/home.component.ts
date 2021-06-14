import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Nota } from '../models/nota';
import { UsersService } from '../users/users.service';
import { NotaService } from '../users/nota.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy{
  user_service: UsersService;
  notasSubscription: Subscription;
  guardarSubscription: Subscription;
  deleteSubscription: Subscription;
  notas : Nota[];
  nota: string = "";


  constructor( private router: Router, private us: UsersService, private notasService: NotaService) {
    this.user_service = us;
    this.notasSubscription = new Subscription();
    this.guardarSubscription = new Subscription();
    this.deleteSubscription = new Subscription();
    this.notas = new Array<Nota>();
  }

  ngOnInit(): void {
    this.getNotas();
  }

  ngOnDestroy(): void {
    this.guardarSubscription.unsubscribe();
    this.notasSubscription.unsubscribe();
    this.deleteSubscription.unsubscribe();
  }

  logout(){
    localStorage.removeItem("jwt");
    this.router.navigate(["login"]);
  }

  saveNotas(){
    this.guardarSubscription = this.notasService.createNota( { nota: this.nota } )
    .subscribe(
      nota => { this.getNotas(); this.nota = "" },
      err => console.log(err)
    );
  }

  getNotas(){
    this.notasSubscription = this.notasService.getAllNotas().subscribe(
      notas => this.notas = notas,
      err => {
        console.log(err)
        this.notas = [];
      }
    )
  }

  deleteNotas(){
    this.deleteSubscription = this.notasService.deleteAllNotas().subscribe(
      response => { this.notas = []; },
      err =>{
        console.log(err);
      }
    );
  }
}
