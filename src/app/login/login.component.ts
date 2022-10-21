import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../core/Servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin:FormGroup;
  token!:any;


  constructor(private authService:AuthService, private route:Router, private fb:FormBuilder) {
    this.formLogin = this.fb.group({
      email: new FormControl('',[Validators.required, Validators.email,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$')]),
      password: new FormControl('', [Validators.required, Validators.minLength(3)])
    })
   }

  ngOnInit(): void {
  }

  // "email": "eve.holt@reqres.in",
  // "password": "cityslicka"

  entrar():void{
      if(this.formLogin.value.email != "eve.holt@reqres.in" || this.formLogin.value.password != "cityslicka" ){
        alert('Usuario o contraseña incorrectos')
      }else{
      this.authService.login(this.formLogin.value.email, this.formLogin.value.password).subscribe((data)=>{
      this.token=data;
      sessionStorage.setItem('token', JSON.stringify(this.token));
      this.route.navigate(['/inicio']);       
      this.formLogin.reset()
      })
  }
  }
}
