import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit(): void {

    this.authService.login("eve.holt@reqres.in", "cityslicka").subscribe((data)=>console.log(data));

  }

}
