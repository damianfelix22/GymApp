import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RutinasPageRoutingModule } from './rutinas-routing.module';
import { RutinasPage } from './rutinas.page';
import { CoreModule } from 'src/app/core/core.module';
import { CrearRutinaComponent } from './components/crear-rutina/crear-rutina.component';
import { RutinaComponent } from './components/rutina/rutina.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RutinasPageRoutingModule,
    CoreModule,
    ReactiveFormsModule
  ],
  declarations: [RutinasPage, CrearRutinaComponent, RutinaComponent]
})
export class RutinasPageModule {}
