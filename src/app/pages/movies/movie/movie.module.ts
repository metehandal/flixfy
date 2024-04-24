import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoviePageRoutingModule } from './movie-routing.module';

import { MoviePage } from './movie.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, MoviePageRoutingModule],
  declarations: [MoviePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MoviePageModule {}
