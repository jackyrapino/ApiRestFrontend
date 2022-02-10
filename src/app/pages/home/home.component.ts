import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  nombre: string = '';
  apellido: string = '';

  personasData: any[] = [];

  constructor() {}

  enviar() {
    this.personasData.push({ nombre: this.nombre, apellido: this.apellido });
  }
}
