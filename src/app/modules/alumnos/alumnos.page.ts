import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.page.html',
  styleUrls: ['./alumnos.page.scss'],
})
export class AlumnosPage implements OnInit {

  user: any = {
    name: 'Pedro',
    lastname: 'Suarez',
    user_role: 'admin'
  }

  clases: any[] = ["TAEKWONDO", "SPINNING", "FUNCIONAL", "CROSSFIT"];

  constructor() { }

  ngOnInit() {
  }

}
