import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailSuperheroPage } from './detail-superhero.page';

const routes: Routes = [
  {
    path: '',
    component: DetailSuperheroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailSuperheroPageRoutingModule {}
