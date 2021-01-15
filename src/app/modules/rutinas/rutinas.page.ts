import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CrearRutinaComponent } from './components/crear-rutina/crear-rutina.component';
import { RutinaComponent } from './components/rutina/rutina.component';

@Component({
  selector: 'app-rutinas',
  templateUrl: './rutinas.page.html',
  styleUrls: ['./rutinas.page.scss'],
})
export class RutinasPage implements OnInit {

  //Usuario que está usando la aplicación
  user: any = {
    name: 'Pedro',
    lastname: 'Suarez',
    user_role: 'admin' //cambiar este valor por 'admin', 'alumno' o 'instructor'
  };

  rutinas: any = [
    {
      title: 'Velocidad y Potencia',
      description: 'esto es lo que hay que hacer en esta clase, acá pueden aparecer ejercicios y recomendaciones',
      date: '01-05-2021',
      class: 'Taekwondo'
    },
    {
      title: 'Resistencia',
      description: 'esto es lo que hay que hacer en esta clase, acá pueden aparecer ejercicios y recomendaciones',
      date: '01-05-2021',
      class: 'Spinning'
    },
    {
      title: 'Fuerza',
      description: 'esto es lo que hay que hacer en esta clase, acá pueden aparecer ejercicios y recomendaciones',
      date: '01-05-2021',
      class: 'Crossfit'
    },
    {
      title: 'Calentamiento previo',
      description: 'esto es lo que hay que hacer en esta clase, acá pueden aparecer ejercicios y recomendaciones',
      date: '01-05-2021',
      class: 'Taekwondo'
    }
  ];

  rutinasEncontradas: any;

  constructor(public modalController: ModalController, private router: Router) { }

  ngOnInit() {
    this.rutinasEncontradas = this.rutinas;
  }

  //Busca clases por nombre o instructor segun lo ingresado en la barra de búsqueda
  buscar(ev: any) {
    this.rutinasEncontradas = [];
    let rutina = "";
    for (let i = 0; i < this.rutinas.length; i++){
      rutina = this.rutinas[i].title.toLowerCase();
      if (rutina.indexOf(ev.srcElement.value.toLowerCase()) != -1)
        this.rutinasEncontradas.push(this.rutinas[i]);
    }
    if (!ev.srcElement.value) {
      this.rutinasEncontradas = this.rutinas;
    }
  }

  //Cancela la búsqueda (muestra todas las clases)
  cancelarBusqueda() {
    this.rutinasEncontradas = this.rutinas;
  }

  //Abre pantalla para crear una nueva rutina (instructor/admin)
  async nuevaRutina() {
    const modal = await this.modalController.create({
      component: CrearRutinaComponent,
      componentProps: { user: this.user }
    });
    return await modal.present();
  }

  //Abre la información de una rutina al tocar sobre ella (alumno/admin/instructor)
  async abrirRutina(rutina: any) {
    const modal = await this.modalController.create({
      component: RutinaComponent,
      componentProps: { rutina: rutina, user: this.user }
    });
    return await modal.present();
  }

}
