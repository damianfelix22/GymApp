import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-crear-instructor',
  templateUrl: './crear-instructor.component.html',
  styleUrls: ['./crear-instructor.component.scss'],
})
export class CrearInstructorComponent implements OnInit {

  constructor(public viewCtrl: ModalController) { }

  ngOnInit() {}

  //Cierra la pantalla actual
  dismiss() {
    this.viewCtrl.dismiss();
  }

}
