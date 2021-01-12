import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-crear-clase',
  templateUrl: './crear-clase.component.html',
  styleUrls: ['./crear-clase.component.scss'],
})
export class CrearClaseComponent implements OnInit {

  constructor(public viewCtrl: ModalController) { }

  ngOnInit() {}

  dismiss() {
    this.viewCtrl.dismiss();
    }

}
