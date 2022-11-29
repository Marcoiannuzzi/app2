import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/Interfaces/User';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  urlAuth=`${environment.api}usuarios/`

  constructor(private http:HttpClient) { }

  obtenerUsusarios():Observable<User[]>{
    return this.http.get<User[]>(this.urlAuth);
  }

  salir(){
    sessionStorage.removeItem('token');
  }
  
}
