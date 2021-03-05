import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gym',
  templateUrl: './gym.page.html',
  styleUrls: ['./gym.page.scss'],
})
export class GymPage implements OnInit {

  
  gymForm = new FormGroup({ });
  gym: any = {
    name: "Spartan Academy",
    avatar: '../../assets/gymLogo.jpg',
    openTime: '08:00',
    closeTime: '22:30',
    classes: ["Crossfit", "Spinning"],
    location: 'Avenida Siempreviva 742',
    tel: '2664382612'
  };
  clases: any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.clases = this.gym.classes;

    this.gymForm = new FormGroup({
      name: new FormControl(this.gym.name, [Validators.required, Validators.pattern('[a-zA-Z 0-9]*')]),
      tel: new FormControl(this.gym.tel, [Validators.required, Validators.pattern('[+ 0-9 ]*')]),
    });
  }

  onSubmit() {
    this.router.navigateByUrl('menu');
  }

  atras(){
    if(this.gymForm.valid){
      this.router.navigateByUrl('menu');
    }else{
      alert('Revisa los datos requeridos')
    }
  }

}
