import { Component, Input, OnInit } from '@angular/core';
import { Character } from 'src/app/interfaces/rym.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: [
  ]
})
export class CardComponent implements OnInit {

  @Input('character') character!: Character;

  constructor() { }

  ngOnInit(): void {
  }

}
