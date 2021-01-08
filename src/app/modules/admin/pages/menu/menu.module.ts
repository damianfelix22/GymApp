import { SideMenuComponent } from './../../../../core/components/side-menu/side-menu.component';
import { AvatarComponent } from './../../../../core/components/avatar/avatar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuPageRoutingModule } from './menu-routing.module';

import { MenuPage } from './menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuPageRoutingModule
  ],
  declarations: [MenuPage, AvatarComponent,SideMenuComponent]
})
export class MenuPageModule {}
