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

  alumnosEncontrados: any;

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
    this.alumnosEncontrados = this.users;
  }

  buscar(ev: any) {
    this.alumnosEncontrados = [];
    let clase = "";
    for (let i = 0; i < this.users.length; i++){
      clase = this.users[i].name.toLowerCase();
      if (clase.indexOf(ev.srcElement.value.toLowerCase()) != -1)
        this.alumnosEncontrados.push(this.users[i]);
    }
    if (!ev.srcElement.value) {
      this.alumnosEncontrados = this.users;
    }
  }

  cancelarBusqueda() {
    this.alumnosEncontrados = this.users;
  }

}
