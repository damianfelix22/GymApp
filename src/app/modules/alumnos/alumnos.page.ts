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

  users: any[] = ["Lucas Felix", "Damian Felix", "Felipe Miguel", "Leo Ortega", "Juancito Perez", "Pablo Diaz", "Negro Ferreyra", "Roberto Rodriguez", "Martin Suarez", "Carlos Marin",
  "Marcos Pereyra", "Román Riquelme", "Carlos Tevez", "Miguel Russo"];


  constructor() { }

  ngOnInit() {
  }

}
