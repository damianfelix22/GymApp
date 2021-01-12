import { Component, OnInit } from '@angular/core';

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
      days: ['lunes', 'jueves'],
      image: 'https://mundotaekwondo.com/wp-content/uploads/2019/05/britanico-peligroso.jpg',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi assumenda a 
      dignissimos.`,
    },
    {
      name: 'Spinning',
      start: '14:00',
      end: '16:00',
      instructor: 'Roberto',
      days: ['martes', 'viernes'],
      image: 'https://www.hola.com/imagenes/estar-bien/20190206136791/ventajas-inconvenientes-spinning-cs/0-643-792/proscontraspinning-t.jpg',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    },
    {
      name: 'Crossfit',
      start: '14:00',
      end: '16:00',
      instructor: 'Maria',
      days: ['lunes', 'miercoles', 'viernes'],
      image: 'https://www.wellandgood.com/wp-content/uploads/2018/11/Stocksy-crossfit-friends-BONNINSTUDIO.jpg',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi assumenda a 
      dignissimos nobis voluptatibus obcaecati sit explicabo, eius voluptatum.`,
    },
  ];

  clasesEncontradas: any;

  constructor() { }

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
    let days_text = days[0];
    for (let i = 1; i < days.length; i++){
      days_text += "-" + days[i];
    }
    return days_text;
  }

}
