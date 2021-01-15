import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-clase',
  templateUrl: './clase.component.html',
  styleUrls: ['./clase.component.scss'],
})
export class ClaseComponent implements OnInit {

  clase: any;

  user: any;

  constructor(public viewCtrl: ModalController, public navParams: NavParams) {
    this.clase = this.navParams.get('clase');
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
