import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SoonPageRoutingModule } from './soon-routing.module';

import { SoonPage } from './soon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SoonPageRoutingModule
  ],
  declarations: [SoonPage]
})
export class SoonPageModule {}
