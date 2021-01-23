import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.scss'],
})
export class AlumnoComponent implements OnInit {

  alumnoForm = new FormGroup({ });

  //Usuario que está usando la app
  user: any;

  //Recibe los datos del alumno que se muestra 
  alumno: any;
  
  clases: any;

  constructor(public viewCtrl: ModalController, public navParams: NavParams) {
    this.user = this.navParams.get('user');
    this.alumno = this.navParams.get('alumno');
  }

  ngOnInit() {
    this.clases = this.alumno.classes;

    this.alumnoForm = new FormGroup({
      name: new FormControl(this.alumno.name, [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
      lastname: new FormControl(this.alumno.lastname, [Validators.required, Validators.pattern('[a-zA-Z ]*')])
    });
  }

  //Cierra la pantalla actual
  dismiss() {
    this.viewCtrl.dismiss();
  }

}
