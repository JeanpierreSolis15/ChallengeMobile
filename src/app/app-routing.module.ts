import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list-superheroes',
    pathMatch: 'full',
  },
  {
    path: 'list-superheroes',
    loadChildren: () =>
      import('./pages/list-superheroes/list-superheroes.module').then(
        (m) => m.ListSuperheroesPageModule
      ),
  },
  {
    path: 'detail-superhero/:id',
    loadChildren: () =>
      import('./pages/detail-superhero/detail-superhero.module').then(
        (m) => m.DetailSuperheroPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
