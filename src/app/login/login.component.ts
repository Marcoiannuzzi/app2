import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService, private route:Router) { }

  ngOnInit(): void {

    this.authService.login("eve.holt@reqres.in", "cityslicka").subscribe((data)=>console.log(data));

  }

  entrar():void{
    this.route.navigate(['/inicio']);
  }

}
