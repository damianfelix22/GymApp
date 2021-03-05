import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-rutina',
  templateUrl: './crear-rutina.component.html',
  styleUrls: ['./crear-rutina.component.scss'],
})
export class CrearRutinaComponent implements OnInit {

  rutinaForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(25)]),
    description: new FormControl('', Validators.required)
  });

  user: any;

  constructor(public viewCtrl: ModalController, public navParams: NavParams) {
    this.user = this.navParams.get('user');
  }

  ngOnInit() {}

  //Cierra la pantalla actual (botón superior derecho)
  dismiss() {
    this.viewCtrl.dismiss();
  }

}
