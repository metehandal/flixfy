import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SoonPage } from './soon.page';

const routes: Routes = [
  {
    path: '',
    component: SoonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoonPageRoutingModule {}
