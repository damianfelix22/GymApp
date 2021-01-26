import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HerramientasPageRoutingModule } from './herramientas-routing.module';
import { HerramientasPage } from './herramientas.page';
import { CoreModule } from 'src/app/core/core.module';
import { CronometroComponent } from './components/cronometro/cronometro.component';
import { TemporizadorComponent } from './components/temporizador/temporizador.component';
import { TabataComponent } from './components/tabata/tabata.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HerramientasPageRoutingModule,
    CoreModule
  ],
  declarations: [HerramientasPage, CronometroComponent, TemporizadorComponent, TabataComponent]
})
export class HerramientasPageModule {}
