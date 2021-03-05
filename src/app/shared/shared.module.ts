import { AlumnosButtonComponent } from './components/alumnos-button/alumnos-button.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RutinasButtonComponent } from './components/rutinas-button/rutinas-button.component';
import { ClasesButtonComponent } from './components/clases-button/clases-button.component';
import { InstructorButtonComponent } from './components/instructor-button/instructor-button.component';
import { HerramientasButtonComponent } from './components/herramientas-button/herramientas-button.component';
import { IonicModule } from '@ionic/angular'; 



@NgModule({
  declarations: [RutinasButtonComponent, ClasesButtonComponent, AlumnosButtonComponent, InstructorButtonComponent, HerramientasButtonComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[RutinasButtonComponent, ClasesButtonComponent, AlumnosButtonComponent, InstructorButtonComponent, HerramientasButtonComponent]
})
export class SharedModule { }
