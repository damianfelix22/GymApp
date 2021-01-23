import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { InstructoresPageRoutingModule } from './instructores-routing.module';
import { InstructoresPage } from './instructores.page';
import { CoreModule } from 'src/app/core/core.module';
import { InstructorComponent } from './instructor/instructor.component';
import { CrearInstructorComponent } from './crear-instructor/crear-instructor.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InstructoresPageRoutingModule,
    CoreModule,
    ReactiveFormsModule
  ],
  declarations: [InstructoresPage, InstructorComponent, CrearInstructorComponent]
})
export class InstructoresPageModule {}
