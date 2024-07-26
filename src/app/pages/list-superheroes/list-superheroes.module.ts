import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListSuperheroesPageRoutingModule } from './list-superheroes-routing.module';

import { ListSuperheroesPage } from './list-superheroes.page';
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ListSuperheroesPageRoutingModule
  ],
  declarations: [ListSuperheroesPage]
})
export class ListSuperheroesPageModule {}
