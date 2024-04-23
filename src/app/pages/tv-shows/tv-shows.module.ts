import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TvShowsPageRoutingModule } from './tv-shows-routing.module';

import { TvShowsPage } from './tv-shows.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TvShowsPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [TvShowsPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TvShowsPageModule {}
