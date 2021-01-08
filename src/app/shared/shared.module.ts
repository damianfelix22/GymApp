import { HerramientasButtonComponent } from './components/herramientas-button/herramientas-button.component';
import { InstructorButtonComponent } from './components/instructor-button/instructor-button.component';
import { ClasesButtonComponent } from './components/clases-button/clases-button.component';
import { RutinasButtonComponent } from './components/rutinas-button/rutinas-button.component';
import { AlumnosButtonComponent } from './components/alumnos-button/alumnos-button.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [AlumnosButtonComponent, ClasesButtonComponent, HerramientasButtonComponent, InstructorButtonComponent, RutinasButtonComponent],
  imports: [
    CommonModule
  ],
  exports:[AlumnosButtonComponent, ClasesButtonComponent, HerramientasButtonComponent, InstructorButtonComponent, RutinasButtonComponent]
})
export class SharedModule { }
