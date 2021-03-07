import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  alumnoForm = new FormGroup({ });
  user: any = {
    name: "Lucrecia",                                                 //Nombre
    lastname: "Felix",                                                //Apellido
    avatar: 'https://petapixel.com/assets/uploads/2017/11/fake3.jpg', //Avatar
    startDate: '04-03-2020',                                          //Fecha de Inicio
    lastPayment: '01-04-2021',                                        //Ultimo pago de matrìcula
    expirationDate: '02-04-2021',                                     //Fecha de vencimiento de la matricula
    classes: ["Crossfit", "Spinning"],                                //Clases a las que está autorizado
    reservation: 'Spinning',                                          //Clase reservada en este momento
    lastReservations: 3                                               //Clases reservadas desde su último pago
  };
  clases: any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.clases = this.user.classes;

    this.alumnoForm = new FormGroup({
      name: new FormControl(this.user.name, [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
      lastname: new FormControl(this.user.lastname, [Validators.required, Validators.pattern('[a-zA-Z ]*')])
    });
  }

  onSubmit() {
    this.router.navigateByUrl('menu');
  }

  atras(){
    if(this.alumnoForm.valid){
      this.router.navigateByUrl('menu');
    }else{
      alert('Revisa los datos requeridos')
    }
  }

}
