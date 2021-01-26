import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  instructorForm: any;

  constructor(public viewCtrl: ModalController, public navParams: NavParams) {
    this.user = this.navParams.get('user');
    this.instructor = this.navParams.get('instructor');

    this.instructorForm = new FormGroup({
      name: new FormControl(this.instructor.name, [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
      lastname: new FormControl(this.instructor.lastname, [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
      age: new FormControl(this.instructor.age, [Validators.required, Validators.pattern('[0-9]*'), Validators.max(120)])
    });
  }

  ngOnInit() {
    this.clases = this.instructor.classes;
  }

  //Cierra la pantalla actual
  dismiss() {
    this.viewCtrl.dismiss();
  }

}
