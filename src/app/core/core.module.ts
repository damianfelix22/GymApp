import { AvatarComponent } from './components/avatar/avatar.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular'; 



@NgModule({
  declarations: [
    SideMenuComponent,
    AvatarComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    SideMenuComponent,
    AvatarComponent
  ]
})
export class CoreModule { }
