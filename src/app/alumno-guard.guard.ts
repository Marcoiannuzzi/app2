import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumnoGuardGuard implements CanActivate {

  constructor(private router:Router){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      var token = sessionStorage.getItem('token');
      console.log(token)
  
      if (token === "alumno"){
        return true;
  
      }
      else{
        alert("No tiene acceso a esta url")
        this.router.navigate(['/login']);
        return false
        
      }
  
  }
  
}
