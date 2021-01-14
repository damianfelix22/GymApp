import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.scss'],
})
export class ReservasComponent implements OnInit {

  user: any;

  clases: any = [
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

  clase_sel: any = this.clases[0];

  constructor(public viewCtrl: ModalController, public navParams: NavParams) {
    this.user = this.navParams.get('user');
  }

  
  ngOnInit() { }
  
  dismiss() {
    this.viewCtrl.dismiss();
  }

  select(ev: any){
    console.log(ev.detail.value);
    for(let i=0; i<this.clases.length; i++){
      if(this.clases[i].name == ev.detail.value){
        this.clase_sel = this.clases[i];
      }
    }
  }

  reservar(){
    alert("Clase Reservada");
    this.viewCtrl.dismiss();
  }

}
