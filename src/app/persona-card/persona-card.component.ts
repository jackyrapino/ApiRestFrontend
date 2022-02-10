import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona-card',
  templateUrl: './persona-card.component.html',
  styleUrls: ['./persona-card.component.scss'],
})
export class PersonaCardComponent implements OnInit {
  persona: any = { nombre: 'pepita', apellido: 'la pistolera' };

  constructor() {}

  ngOnInit(): void {
    console.log(this.persona);
    console.log(this.persona.nombre);
  }
}
