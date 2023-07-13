import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { ConsejosComponent } from './consejos/consejos.component';
import { DestacadosComponent } from './destacados/destacados.component';
import { HeaderComponent } from './header/header.component';
import { IntroduccionComponent } from './introduccion/introduccion.component';
import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CardComponent,
    ConsejosComponent,
    DestacadosComponent,
    HeaderComponent,
    IntroduccionComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    CardComponent,
    ConsejosComponent,
    DestacadosComponent,
    FooterComponent,
    HeaderComponent,
    IntroduccionComponent,
  ]
})
export class ComponentsModule { }
