import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-instructor',
  templateUrl: './crear-instructor.component.html',
  styleUrls: ['./crear-instructor.component.scss'],
})
export class CrearInstructorComponent implements OnInit {

  instructorForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
    lastname: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
    age: new FormControl('', [Validators.required, Validators.pattern('[0-9]*'), Validators.max(100)])
  });

  constructor(public viewCtrl: ModalController) { }

  ngOnInit() {}

  //Cierra la pantalla actual
  dismiss() {
    this.viewCtrl.dismiss();
  }

}
