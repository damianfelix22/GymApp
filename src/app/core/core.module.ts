import { RouterModule } from '@angular/router';
import { AvatarComponent } from './components/avatar/avatar.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular'; 



@NgModule({
  declarations: [
    SideMenuComponent,
    AvatarComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [
    SideMenuComponent,
    AvatarComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CoreModule { }
