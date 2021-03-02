import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GymPagePage } from './gym-page.page';

const routes: Routes = [
  {
    path: '',
    component: GymPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GymPagePageRoutingModule {}
