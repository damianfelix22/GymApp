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

  constructor(public viewCtrl: ModalController, public navParams: NavParams) {
    this.clase = this.navParams.get('clase');
  }

  ngOnInit() {}

  dismiss() {
    this.viewCtrl.dismiss();
    }
}
