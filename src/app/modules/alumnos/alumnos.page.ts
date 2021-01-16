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
      name: "Lucrecia",
      lastname: "Felix",
      days_left: 0,
      avatar: 'https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/wp-cms/uploads/2019/02/5-create-fake-people-in-2-seconds-on-this-insane-site.jpg',
      startDate: '01-03-2021',
      expirationDate: '02-03-2021',
      classes: ["Crossfit", "Spinning"]
    },
    {
      name: "Felipe",
      lastname: "Miguel",
      days_left: 26,
      avatar: 'https://petapixel.com/assets/uploads/2017/11/fake3.jpg',
      startDate: '01-01-2021',
      expirationDate: '02-02-2021',
      classes: ['Spinning']
    },
    {
      name: "Carlos",
      lastname: "Tevez",
      days_left: 22,
      avatar: 'https://d3k3aw0nh86y2q.cloudfront.net/wp-content/uploads/2020/08/iStock-1252383321-256x256.jpg',
      startDate: '12-04-2020',
      expirationDate: '01-04-2021',
      classes: ['Taekwondo', 'Spinning']
    },
    {
      name: "Maria",
      lastname: "Becerra",
      days_left: 8,
      avatar: 'https://pbs.twimg.com/profile_images/667766866090135552/Tm8YRicR.jpg',
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
