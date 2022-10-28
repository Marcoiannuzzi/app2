import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/Servicios/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  token:any;

  constructor(private authService: AuthService, private router:Router) { }

  ngOnInit(): void {
    this.token =  sessionStorage.getItem('token');
    console.log(this.token)
  }

  salir(){
    this.authService.salir()
    this.router.navigate(['login'])
  }


}
