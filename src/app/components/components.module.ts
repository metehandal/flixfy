import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CategoryMovies } from './movies/category/category.component';
import { CategoryTvShows } from './tv-shows/category/category.component';
import { CategoriesComponent } from './categories/categories.component';

@NgModule({
  declarations: [CategoryMovies, CategoryTvShows, CategoriesComponent],
  imports: [CommonModule, IonicModule, RouterModule],
  exports: [CategoryMovies, CategoryTvShows, CategoriesComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
