import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ClaseComponent } from './components/clase/clase.component';
import { CrearClaseComponent } from './components/crear-clase/crear-clase.component';


@Component({
  selector: 'app-clases',
  templateUrl: './clases.page.html',
  styleUrls: ['./clases.page.scss'],
})
export class ClasesPage implements OnInit {

  user: any = {
    name: 'Pedro',
    lastname: 'Suarez',
    user_role: 'admin'
  };

  clases: any[] = [
    {
      name: 'Taekwondo',
      start: '14:00',
      end: '16:00',
      instructor: 'Pablo',
      days: ['lu', 'ju'],
      image: 'https://mundotaekwondo.com/wp-content/uploads/2019/05/britanico-peligroso.jpg',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi assumenda a dignissimos.',
    },
    {
      name: 'Spinning',
      start: '14:00',
      end: '16:00',
      instructor: 'Roberto',
      days: ['ma', 'vi'],
      image: 'https://www.hola.com/imagenes/estar-bien/20190206136791/ventajas-inconvenientes-spinning-cs/0-643-792/proscontraspinning-t.jpg',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      name: 'Crossfit',
      start: '14:00',
      end: '16:00',
      instructor: 'Maria',
      days: ['lu', 'mi', 'vi'],
      image: 'https://www.wellandgood.com/wp-content/uploads/2018/11/Stocksy-crossfit-friends-BONNINSTUDIO.jpg',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi assumenda a dignissimos nobis voluptatibus obcaecati sit explicabo, eius voluptatum.',
    },
  ];

  clasesEncontradas: any;

  constructor(public modalController: ModalController, private router: Router) { }

  ngOnInit() {
    this.clasesEncontradas = this.clases;
  }

  buscar(ev: any) {
    this.clasesEncontradas = [];
    let clase = "";
    let instructor = "";
    //console.log(text.indexOf(ev.srcElement.value));
    for (let i = 0; i < this.clases.length; i++){
      clase = this.clases[i].name.toLowerCase();
      if (clase.indexOf(ev.srcElement.value.toLowerCase()) != -1)
        this.clasesEncontradas.push(this.clases[i]);
    }

    for (let i = 0; i < this.clases.length; i++){
      instructor = this.clases[i].instructor.toLowerCase();
      if (instructor.indexOf(ev.srcElement.value.toLowerCase()) != -1)
        this.clasesEncontradas.push(this.clases[i]);
    }

    if (!ev.srcElement.value) {
      this.clasesEncontradas = this.clases;
    }
  }

  cancelarBusqueda() {
    this.clasesEncontradas = this.clases;
  }

  dias(days: any) {
    let days_text = '- ';
    let dia = '';
    for (let i = 0; i < days.length; i++){
      switch (days[i]) {
        case 'lu': dia = 'lunes'; break;
        case 'ma': dia = 'martes'; break;
        case 'mi': dia = 'miercoles'; break;
        case 'ju': dia = 'jueves'; break;
        case 'vi': dia = 'viernes'; break;
      }
      days_text += dia + ' - ';
    }
    return days_text;
  }
  async abrirClase(clase: any) {
    const modal = await this.modalController.create({
      component: ClaseComponent,
      componentProps: { clase: clase, user: this.user }
    });
    return await modal.present();
  }

  async nuevaClase() {
    const modal = await this.modalController.create({
      component: CrearClaseComponent,
      componentProps: { user: this.user }
    });
    return await modal.present();
  }

  async reservar() {
    console.log("pantalla reservar clase")
  }

}
