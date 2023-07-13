import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';

import { ComponentsModule } from '../components/components.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { CharactersComponent } from './characters/characters.component';


@NgModule({
  declarations: [
    HomeComponent,
    CharactersComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ComponentsModule,
    SharedModule,
  ],
  exports: [
    HomeComponent
  ]
})
export class PagesModule { }
