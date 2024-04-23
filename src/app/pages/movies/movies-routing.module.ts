import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviesPage } from './movies.page';

const routes: Routes = [
  {
    path: '',
    component: MoviesPage,
  },
  {
    path: ':movieId',
    loadChildren: () =>
      import('./movie/movie.module').then((m) => m.MoviePageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesPageRoutingModule {}
