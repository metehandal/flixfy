import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { SharedDirectivesModule } from 'src/app/directives/shared-directives.module';

@NgModule({
  imports: [
    ComponentsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SharedDirectivesModule,
  ],
  declarations: [HomePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePageModule {}
