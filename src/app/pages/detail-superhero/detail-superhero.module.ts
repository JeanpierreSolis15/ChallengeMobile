import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailSuperheroPageRoutingModule } from './detail-superhero-routing.module';

import { DetailSuperheroPage } from './detail-superhero.page';
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailSuperheroPageRoutingModule,
    TranslateModule
  ],
  declarations: [DetailSuperheroPage]
})
export class DetailSuperheroPageModule {}
