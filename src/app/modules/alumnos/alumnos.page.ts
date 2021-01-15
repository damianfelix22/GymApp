import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CrearAlumnoComponent } from './components/crear-alumno/crear-alumno.component';
import { AlumnoComponent } from './components/alumno/alumno.component';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.page.html',
  styleUrls: ['./alumnos.page.scss'],
})
export class AlumnosPage implements OnInit {

  //Usuario que está usando la app
  user: any = {
    name: 'Pedro',
    lastname: 'Suarez',
    user_role: 'admin'
  }

  //Variable auxiliar para alumnos encontrados por la búsqueda o filtrado
  alumnosEncontrados: any;

  //alumnos
  users: any = [
    {
      name: "Lucas",
      lastname: "Felix",
      days_left: 0,
      avatar: 'https://ionicframework.com/docs/demos/api/avatar/avatar.svg',
      startDate: '01-03-2021',
      expirationDate: '02-03-2021',
      classes: ["Crossfit", "Spinning"]
    },
    {
      name: "Felipe",
      lastname: "Miguel",
      days_left: 26,
      avatar: 'https://ionicframework.com/docs/demos/api/avatar/avatar.svg',
      startDate: '01-01-2021',
      expirationDate: '02-02-2021',
      classes: ['Spinning']
    },
    {
      name: "Carlos",
      lastname: "Tevez",
      days_left: 22,
      avatar: 'https://ionicframework.com/docs/demos/api/avatar/avatar.svg',
      startDate: '12-04-2020',
      expirationDate: '01-04-2021',
      classes: ['Taekwondo', 'Spinning']
    },
    {
      name: "Ramón",
      lastname: "Avila",
      days_left: 8,
      avatar: 'https://ionicframework.com/docs/demos/api/avatar/avatar.svg',
      startDate: '01-13-2020',
      expirationDate: '02-13-2021',
      classes: ['Taekwondo', 'Crossfit']
    }
  ]


  constructor(public modalController: ModalController, private router: Router) { }

  ngOnInit() {
    this.alumnosEncontrados = this.users;
  }

  //Busca alumnos por nombre o apellido
  buscar(ev: any) {
    this.alumnosEncontrados = [];
    let alumno = "";
    for (let i = 0; i < this.users.length; i++){
      alumno = this.users[i].name.toLowerCase();
      if (alumno.indexOf(ev.srcElement.value.toLowerCase()) != -1)
        this.alumnosEncontrados.push(this.users[i]);
    }

    for (let i = 0; i < this.users.length; i++){
      alumno = this.users[i].lastname.toLowerCase();
      if (alumno.indexOf(ev.srcElement.value.toLowerCase()) != -1)
        this.alumnosEncontrados.push(this.users[i]);
    }

    if (!ev.srcElement.value) {
      this.alumnosEncontrados = this.users;
    }
  }

  //Cancela búsqueda (muestra todos los alumnos)
  cancelarBusqueda() {
    this.alumnosEncontrados = this.users;
  }

  //Abre pantalla para crear nuevo alumno (solo admin)
  async nuevoAlumno() {
    const modal = await this.modalController.create({
      component: CrearAlumnoComponent,
      componentProps: { user: this.user }
    });
    return await modal.present();
  }

  //Abre pantalla para ver datos del alumno (admin/instructor)
  async alumno(alumno:any) {
    const modal = await this.modalController.create({
      component: AlumnoComponent,
      componentProps: { alumno: alumno, user: this.user }
    });
    return await modal.present();
  }

  //Elimina un alumno (solo admin)
  eliminarAlumno(){
    confirm("estás seguro?");
  }

  //Calcula los días que faltan para el vencimiento de la matrícula de cada alumno
  //según la fecha actual. Los muestra a la derecha del nombre del alumno
  diasVencimiento(alumno: any){

    let year = (new Date()).getFullYear();
    let month = (new Date()).getMonth() + 1;
    let day = (new Date()).getDate();
    let today = month + '-' + day + '-' + year;

    let expirationDate = new Date(alumno.expirationDate).getTime();
    let actualDate    = new Date(today.toString()).getTime();
    let diff = expirationDate - actualDate;
    if(diff <= 0){
      return 0;
    }
    return diff/(1000*60*60*24);
  }

}
