import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GymPagePageRoutingModule } from './gym-page-routing.module';

import { GymPagePage } from './gym-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GymPagePageRoutingModule
  ],
  declarations: [GymPagePage]
})
export class GymPagePageModule {}
