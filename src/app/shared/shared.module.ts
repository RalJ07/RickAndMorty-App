import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscadorComponent } from './buscador/buscador.component';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    BuscadorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  
  ],
  exports: [
    BuscadorComponent,
  ]
})
export class SharedModule { }
