import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListSuperheroesPage } from './list-superheroes.page';

const routes: Routes = [
  {
    path: '',
    component: ListSuperheroesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListSuperheroesPageRoutingModule {}
