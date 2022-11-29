import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../core/Servicios/auth.service';
import { User } from '../shared/Interfaces/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin:FormGroup;
  token!:any;
  users!:User[];
  loginUser?:User;


  constructor(private authService:AuthService, private route:Router, private fb:FormBuilder) {
    this.formLogin = this.fb.group({
      email: new FormControl('',[Validators.required, Validators.email,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$')]),
      password: new FormControl('', [Validators.required, Validators.minLength(3)])
    })
   }

  ngOnInit(): void {
    this.authService.obtenerUsusarios().subscribe({
      next:(data:User[])=>this.users = data
    })
  }

  entrar():void{
      this.loginUser = this.users.find((user)=>user.email == this.formLogin.value.email)
      if(this.formLogin.value.email != this.loginUser?.email || this.formLogin.value.password != this.loginUser?.password ){
        alert('Usuario o contraseña incorrectos')
      }else{
      this.token=this.loginUser?.rol
      sessionStorage.setItem('token', this.token);
      this.route.navigate(['/inicio']);       
      this.formLogin.reset()
      }
    }
  }