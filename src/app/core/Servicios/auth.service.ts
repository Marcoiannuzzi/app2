import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/Interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url:string="http://localhost:3000/usuarios/";


  constructor(private http:HttpClient) { }

  obtenerUsusarios():Observable<User[]>{
    return this.http.get<User[]>(this.url);
  }

  salir(){
    sessionStorage.removeItem('token');
  }
  
}
