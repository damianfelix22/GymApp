import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { PopoverController } from '@ionic/angular';
import { NuevoHorarioComponent } from '../nuevo-horario/nuevo-horario.component';

@Component({
  selector: 'app-clase',
  templateUrl: './clase.component.html',
  styleUrls: ['./clase.component.scss'],
})
export class ClaseComponent implements OnInit {

  clase: any;
  user: any;
  showButton: any = true;

  classForm = new FormGroup({});

  constructor(public viewCtrl: ModalController, public navParams: NavParams, public alertController: AlertController, public popoverController: PopoverController) {
    this.clase = this.navParams.get('clase');
    this.user = this.navParams.get('user');

    this.classForm = new FormGroup({
      className: new FormControl(this.clase.name, Validators.required),
      instructorName: new FormControl(this.clase.instructor, [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
      description: new FormControl(this.clase.description)
    });
  }

  ngOnInit() {}

  //Cierra la pantalla actual (botón superior derecho)
  dismiss() {
    this.viewCtrl.dismiss();
  }

  async dias() {
    const alert = await this.alertController.create({
      cssClass: 'diasAlert',
      header: 'Días y Horarios',
      message: this.diaTexto(),
      buttons: ['OK']
    });

    await alert.present();
  }

  diaTexto(){
    let texto = ""
    for(let i=0; i<this.clase.days.length; i++){
      texto += this.clase.days[i].day + " de " + this.clase.days[i].start + " a " + this.clase.days[i].end + "\n";
    }
    return texto
  }

  muestra(){
    this.showButton = !this.showButton;
  }

  nuevoHorario(){
    this.showButton = true;
  }

}
