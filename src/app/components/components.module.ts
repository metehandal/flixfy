import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CategoryMovies } from './movies/category/category.component';
import { CategoryTvShows } from './tv-shows/category/category.component';

@NgModule({
  declarations: [CategoryMovies, CategoryTvShows],
  imports: [CommonModule, IonicModule, RouterModule],
  exports: [CategoryMovies, CategoryTvShows],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
