import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.scss'],
})
export class AlumnoComponent implements OnInit {

  user: any;
  alumno: any;
  clases: any;

  constructor(public viewCtrl: ModalController, public navParams: NavParams) {
    this.user = this.navParams.get('user');
    this.alumno = this.navParams.get('alumno');
  }

  ngOnInit() {
    this.clases = this.alumno.classes;
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
