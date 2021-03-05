import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { CronometroComponent } from './components/cronometro/cronometro.component';
import { TabataComponent } from './components/tabata/tabata.component';
import { TemporizadorComponent } from './components/temporizador/temporizador.component';

@Component({
  selector: 'app-herramientas',
  templateUrl: './herramientas.page.html',
  styleUrls: ['./herramientas.page.scss'],
})
export class HerramientasPage implements OnInit {

  constructor(public popoverController: PopoverController) {}
  
  ngOnInit(){}

  async cronometro(ev: any) {
    const popover = await this.popoverController.create({
      component: CronometroComponent,
      cssClass: 'pop-over',
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

  async temporizador(ev: any) {
    const popover = await this.popoverController.create({
      component: TemporizadorComponent,
      cssClass: 'pop-over',
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

  async tabata(ev: any) {
    const popover = await this.popoverController.create({
      component: TabataComponent,
      cssClass: 'pop-over',
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

}
