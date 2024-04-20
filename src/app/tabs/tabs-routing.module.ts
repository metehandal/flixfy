import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('../tabs/home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'search',
        loadChildren: () =>
          import('../tabs/search/search.module').then(
            (m) => m.SearchPageModule
          ),
      },
      {
        path: 'soon',
        loadChildren: () =>
          import('../tabs/soon/soon.module').then((m) => m.SoonPageModule),
      },
      {
        path: 'favorites',
        loadChildren: () =>
          import('../tabs/favorites/favorites.module').then(
            (m) => m.FavoritesPageModule
          ),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('../tabs/profile/profile.module').then(
            (m) => m.ProfilePageModule
          ),
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
