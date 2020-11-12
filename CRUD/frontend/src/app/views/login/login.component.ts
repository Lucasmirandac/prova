import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  private usuario: Usuario = new Usuario(); 

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  fazerLogin(): void{
    this.authService.fazerLogin(this.usuario)
  }
}
