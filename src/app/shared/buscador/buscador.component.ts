import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Character, RymResponse } from 'src/app/interfaces/rym.interface';
import { RymService } from 'src/app/services/rym.service';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: [
  ]
})
export class BuscadorComponent implements OnInit {

  search: string = '';
  characters: Character[] = [];


  constructor(private rymService: RymService,
              private route: Router) { }

  ngOnInit(): void {
  }

  searchCharacter(query: string) {
   
    this.rymService.searchByName( query )
      .subscribe({
          next: (resp) => {
            this.route.navigateByUrl('characters');
            this.characters = resp.results;
            this.rymService.addResults( resp.results );
            this.search = '';
          },

          error: (message) => {
            Swal.fire('Error', 'No existe un personaje con ese nombre', 'error')
          }
        }
      )
  }

  searchRandom() {
    this.rymService.searchRandom()
    .subscribe( (resp) => {
          this.route.navigateByUrl('characters');
          this.characters = resp.results;
          this.rymService.addResults( resp.results );
      })
  }

}
