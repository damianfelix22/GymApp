import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GymRegisterPage } from './gym-register.page';

const routes: Routes = [
  {
    path: '',
    component: GymRegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GymRegisterPageRoutingModule {}
