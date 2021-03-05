import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GymRegisterPageRoutingModule } from './gym-register-routing.module';

import { GymRegisterPage } from './gym-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GymRegisterPageRoutingModule
  ],
  declarations: [GymRegisterPage]
})
export class GymRegisterPageModule {}
