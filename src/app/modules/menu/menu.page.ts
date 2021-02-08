import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PopoverController } from '@ionic/angular';
import { CrearAlumnoComponent } from '../alumnos/components/crear-alumno/crear-alumno.component';
import { CrearClaseComponent } from '../clases/components/crear-clase/crear-clase.component';
import { ReservasComponent } from '../clases/components/reservas/reservas.component';
import { CronometroComponent } from '../herramientas/components/cronometro/cronometro.component';
import { TemporizadorComponent } from '../herramientas/components/temporizador/temporizador.component';
import { CrearInstructorComponent } from '../instructores/crear-instructor/crear-instructor.component';
import { CrearRutinaComponent } from '../rutinas/components/crear-rutina/crear-rutina.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  user: any = {
    name: 'Pedro',
    lastname: 'Suarez',
    user_role: 'admin'
  }

  constructor(public modalController: ModalController, public popoverController: PopoverController) { }

  ngOnInit() {
  }

  //Abre pantalla para crear una nueva clase (solo para admin)
  async nuevaClase() {
    const modal = await this.modalController.create({
      component: CrearClaseComponent,
      componentProps: { user: this.user }
    });
    return await modal.present();
  }

  //Abre pantalla para crear una nueva clase (solo para admin)
  async nuevoAlumno() {
    const modal = await this.modalController.create({
      component: CrearAlumnoComponent,
      componentProps: { user: this.user }
    });
    return await modal.present();
  }

  async nuevaRutina() {
    const modal = await this.modalController.create({
      component: CrearRutinaComponent,
      componentProps: { user: this.user }
    });
    return await modal.present();
  }

  async nuevoInstructor() {
    const modal = await this.modalController.create({
      component: CrearInstructorComponent,
      componentProps: { user: this.user }
    });
    return await modal.present();
  }

  async reservarClase() {
    const modal = await this.modalController.create({
      component: ReservasComponent,
      componentProps: { user: this.user }
    });
    return await modal.present();
  }

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

}
