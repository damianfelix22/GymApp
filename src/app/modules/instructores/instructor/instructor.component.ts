import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.scss'],
})
export class InstructorComponent implements OnInit {

  //Usuario que está usando la app
  user: any;

  //Recibe los datos del instructor que se muestra 
  instructor: any;
  
  clases: any;

  constructor(public viewCtrl: ModalController, public navParams: NavParams) {
    this.user = this.navParams.get('user');
    this.instructor = this.navParams.get('instructor');
  }

  ngOnInit() {
    this.clases = this.instructor.classes;
  }

  //Cierra la pantalla actual
  dismiss() {
    this.viewCtrl.dismiss();
  }

}
