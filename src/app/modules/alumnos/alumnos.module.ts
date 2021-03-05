import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { AlumnosPageRoutingModule } from './alumnos-routing.module';
import { AlumnosPage } from './alumnos.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';
import { CrearAlumnoComponent } from './components/crear-alumno/crear-alumno.component';
import { AlumnoComponent } from './components/alumno/alumno.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlumnosPageRoutingModule,
    SharedModule,
    CoreModule,
    ReactiveFormsModule
  ],
  declarations: [AlumnosPage, CrearAlumnoComponent, AlumnoComponent]
})
export class AlumnosPageModule {}
