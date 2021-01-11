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
  }

  clases: any[] = [
    {
      name: 'Taekwondo',
      start: '14:00',
      end: '16:00',
      instructor: 'Pablo',
      image: 'https://mundotaekwondo.com/wp-content/uploads/2019/05/britanico-peligroso.jpg',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi assumenda a 
      dignissimos.`,
    },
    {
      name: 'Spinning',
      start: '14:00',
      end: '16:00',
      instructor: 'Pablo',
      image: 'https://www.hola.com/imagenes/estar-bien/20190206136791/ventajas-inconvenientes-spinning-cs/0-643-792/proscontraspinning-t.jpg',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    },
    {
      name: 'Crossfit',
      start: '14:00',
      end: '16:00',
      instructor: 'Pablo',
      image: 'https://www.wellandgood.com/wp-content/uploads/2018/11/Stocksy-crossfit-friends-BONNINSTUDIO.jpg',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi assumenda a 
      dignissimos nobis voluptatibus obcaecati sit explicabo, eius voluptatum.`,
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
