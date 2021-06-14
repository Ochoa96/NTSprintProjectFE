import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Nota } from '../models/nota';

@Injectable({
  providedIn: 'root'
})
export class NotaService {

  API_URL: string = 'http://localhost:13105/';
  private user: any;
  constructor(private http: HttpClient) { }

  createNota(nota: any){
    const httpOptions = { headers: new HttpHeaders({'Content-Type':  'application/json' }) };
    return this.http.post<Nota>(this.API_URL + "api/notas", JSON.stringify(nota), httpOptions);
  }
  getAllNotas(){
    return this.http.get<Nota[]>(this.API_URL + "api/notas");
  }
  deleteAllNotas(){
    return this.http.delete(this.API_URL + "api/notas");
  }
}


