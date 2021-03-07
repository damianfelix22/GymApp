import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GymPageRoutingModule } from './gym-routing.module';

import { GymPage } from './gym.page';

import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GymPageRoutingModule,
    CoreModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [GymPage]
})
export class GymPageModule {}
