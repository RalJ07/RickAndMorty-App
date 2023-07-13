import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/interfaces/rym.interface';
import { RymService } from 'src/app/services/rym.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styles: [
  ]
})
export class CharactersComponent implements OnInit {

  characterList: Character[] = [];

  constructor(private rymService: RymService) { }

  ngOnInit(): void {
    this.showResults();
  }

  showResults() {
    this.rymService.characterFiltered$
        .subscribe( (character:Character[]) => this.characterList = character);
  }

}
