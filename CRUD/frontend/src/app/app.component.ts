import { Component } from '@angular/core';
import { AuthService } from './views/login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

mostrarMenu: boolean=false;

constructor(private authService:AuthService) {

} 
ngOnInit(){
  this.authService.mostrarMenuEmitter.subscribe(
    mostrar => this.mostrarMenu = mostrar
  );
}
}

