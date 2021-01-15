import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-rutina',
  templateUrl: './rutina.component.html',
  styleUrls: ['./rutina.component.scss'],
})
export class RutinaComponent implements OnInit {

  rutina: any;

  user: any;

  constructor(public viewCtrl: ModalController, public navParams: NavParams) {
    this.rutina = this.navParams.get('rutina');
    this.user = this.navParams.get('user');
  }

  ngOnInit() {}

  //Cierra la pantalla actual (botón superior derecho)
  dismiss() {
    this.viewCtrl.dismiss();
  }

  //Devuelve los días que se dicta una clase
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

}
