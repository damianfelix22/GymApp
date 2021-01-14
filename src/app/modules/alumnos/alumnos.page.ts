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

  users: any = [
    {
      name: "Lucas",
      lastname: "Felix",
      days_left: 0,
      avatar: 'https://ionicframework.com/docs/demos/api/avatar/avatar.svg'
    },
    {
      name: "Felipe",
      lastname: "Miguel",
      days_left: 26,
      avatar: 'https://ionicframework.com/docs/demos/api/avatar/avatar.svg'
    },
    {
      name: "Carlos",
      lastname: "Tevez",
      days_left: 22,
      avatar: 'https://ionicframework.com/docs/demos/api/avatar/avatar.svg'
    },
    {
      name: "Ramón",
      lastname: "Avila",
      days_left: 8,
      avatar: 'https://ionicframework.com/docs/demos/api/avatar/avatar.svg'
    }
  ]


  constructor() { }

  ngOnInit() {
  }

}
