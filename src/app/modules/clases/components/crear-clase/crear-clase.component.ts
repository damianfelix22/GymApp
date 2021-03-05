import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { PopoverController } from '@ionic/angular';
import { NuevoHorarioComponent } from '../nuevo-horario/nuevo-horario.component';

@Component({
  selector: 'app-crear-clase',
  templateUrl: './crear-clase.component.html',
  styleUrls: ['./crear-clase.component.scss'],
})
export class CrearClaseComponent implements OnInit {

  clase: any;
  showButton: any = true;
  days: any = [];

  classForm = new FormGroup({
    className: new FormControl('', Validators.required),
    instructorName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
    description: new FormControl('')
  });

  constructor(public viewCtrl: ModalController, public alertController: AlertController, public popoverController: PopoverController) { }

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
    if(this.days){
      for(let i=0; i<this.days.length; i++){
        texto += this.days[i].day + " de " + this.days[i].start + " a " + this.days[i].end + "\n";
      }
      return texto
    }else{
      return "No hay horarios asignados a esta clase";
    }
    
    
  }

  muestra(){
    this.showButton = !this.showButton;
  }

  nuevoHorario(){
    this.showButton = true;


    this.days.push({day: 'martes', start: "01:00", end: "02:00"});
    console.log(this.days);
    
    
  }

}
