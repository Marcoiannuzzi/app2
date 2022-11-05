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

login(email:string, password:string):Observable<any>{

    let body={
      email: email,
      password:password
    }

    return this.http.post('https://reqres.in/api/login', body);
  }

  obtenerUsusarios():Observable<User[]>{
    return this.http.get<User[]>(this.url);
  }

  salir(){
    sessionStorage.removeItem('token');
  }
  
}
