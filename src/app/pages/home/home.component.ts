import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  nombre: string = '';
  apellido: string = '';

 
  constructor() {}

  enviar() {
    alert(this.nombre + ' ' + this.apellido);
  }
}
