import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona-card',
  templateUrl: './persona-card.component.html',
  styleUrls: ['./persona-card.component.scss'],
})
export class PersonaCardComponent implements OnInit {
  @Input() personas: any[] = [];
  @Input() titulo: string;

  constructor() {}

  ngOnInit(): void {}
}
