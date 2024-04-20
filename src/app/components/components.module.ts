import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';

@NgModule({
  declarations: [CategoryComponent],
  imports: [CommonModule, IonicModule, RouterModule],
  exports: [CategoryComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
