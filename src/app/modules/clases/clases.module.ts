import { CrearClaseComponent } from './components/crear-clase/crear-clase.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ClasesPageRoutingModule } from './clases-routing.module';
import { ClasesPage } from './clases.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';
import { ClaseComponent } from './components/clase/clase.component';
import { ReservasComponent } from './components/reservas/reservas.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClasesPageRoutingModule,
    SharedModule,
    CoreModule
  ],
  declarations: [ClasesPage, ClaseComponent, CrearClaseComponent, ReservasComponent]
})
export class ClasesPageModule {}
