import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CrearAlumnoComponent } from './components/crear-alumno/crear-alumno.component';
import { AlumnoComponent } from './components/alumno/alumno.component';
import { LoadingController } from '@ionic/angular';

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

  //alumnos
  users: any = [
    {
      name: "Lucrecia",                                                 //Nombre
      lastname: "Felix",                                                //Apellido
      avatar: 'https://petapixel.com/assets/uploads/2017/11/fake3.jpg', //Avatar
      startDate: '04-03-2020',                                          //Fecha de Inicio
      lastPayment: '01-04-2021',                                        //Ultimo pago de matrìcula
      expirationDate: '02-04-2021',                                     //Fecha de vencimiento de la matricula
      classes: ["Crossfit", "Spinning"],                                //Clases a las que está autorizado
      reservation: 'Spinning',                                          //Clase reservada en este momento
      lastReservations: 3                                               //Clases reservadas desde su último pago
    },
    {
      name: "Felipe",
      lastname: "Miguel",
      avatar: 'https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/wp-cms/uploads/2019/02/5-create-fake-people-in-2-seconds-on-this-insane-site.jpg',
      startDate: '01-01-2019',
      lastPayment: '12-02-2020',
      expirationDate: '01-08-2021',
      classes: ['Spinning'],
      reservation: 'Spinning',
      lastReservations: 12
    },
    {
      name: "Carlos",
      lastname: "Tevez",
      days_left: 22,
      avatar: 'https://d3k3aw0nh86y2q.cloudfront.net/wp-content/uploads/2020/08/iStock-1252383321-256x256.jpg',
      startDate: '12-04-2020',
      lastPayment: '01-20-2021',
      expirationDate: '02-20-2021',
      classes: ['Taekwondo', 'Spinning'],
      reservation: 'Taekwondo',
      lastReservations: 4
    },
    {
      name: "Maria",
      lastname: "Becerra",
      days_left: 8,
      avatar: 'https://pbs.twimg.com/profile_images/667766866090135552/Tm8YRicR.jpg',
      startDate: '09-13-2018',
      lastPayment: '03-04-2019',
      expirationDate: '04-04-2019',
      classes: ['Taekwondo', 'Crossfit'],
      reservation: '',
      lastReservations: 6
    }
  ]

  //Variable auxiliar para alumnos encontrados por la búsqueda o filtrado
  alumnosEncontrados: any;


  constructor(public modalController: ModalController, private router: Router, public loadingController: LoadingController) { }

  ngOnInit() {
    this.alumnosEncontrados = this.users;
    this.loading();
  }

  async loading(){
    const loading = await this.loadingController.create({
      cssClass: 'loading',
      message: 'Cargando...',
      duration: 500
    });
    await loading.present();
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
      return 'inactivo';
    }
    return diff/(1000*60*60*24)+ ' días';
  }

}
