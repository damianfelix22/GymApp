import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CrearInstructorComponent } from './crear-instructor/crear-instructor.component';
import { InstructorComponent } from './instructor/instructor.component';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-instructores',
  templateUrl: './instructores.page.html',
  styleUrls: ['./instructores.page.scss'],
})
export class InstructoresPage implements OnInit {

   //Usuario que está usando la app
   user: any = {
    name: 'Pedro',
    lastname: 'Suarez',
    user_role: 'admin'
  }

  //Variable auxiliar para instructores encontrados por la búsqueda o filtrado
  profesEncontrados: any;

  //instructores
  profes: any = [
    {
      name: "Lucas",
      lastname: "Felix",
      age: 27,
      avatar: 'https://d3k3aw0nh86y2q.cloudfront.net/wp-content/uploads/2020/08/iStock-1252383321-256x256.jpg',
      state: 'activo'
    },
    {
      name: "Marta",
      lastname: "Martinez",
      age: 24,
      avatar: 'https://www.crikey.com.au/wp-content/uploads/2019/05/amber-256x256.jpg',
      state: 'inactivo'
    },
    {
      name: "Carlos",
      lastname: "Tevez",
      age: 22,
      avatar: 'https://pbs.twimg.com/profile_images/2690640954/2f9f0ab40048febff6ec82bbc2a3ec67.jpeg',
      state: 'activo'
    },
    {
      name: "Ramón",
      lastname: "Avila",
      age: 35,
      avatar: 'https://itp.nyu.edu/image/w256//people_pics/flash/kowal.jpg',
      state: 'inactivo'
    }
  ]


  constructor(public modalController: ModalController, private router: Router, public loadingController: LoadingController) { }

  ngOnInit() {
    this.profesEncontrados = this.profes;
    this.loading();
  }

  async loading(){
    const loading = await this.loadingController.create({
      cssClass: 'loading',
      message: 'Cargando...',
      duration: 1000
    });
    await loading.present();
  }

  //Busca instructores por nombre o apellido
  buscar(ev: any) {
    this.profesEncontrados = [];
    let profe = "";
    for (let i = 0; i < this.profes.length; i++){
      profe = this.profes[i].name.toLowerCase();
      if (profe.indexOf(ev.srcElement.value.toLowerCase()) != -1)
        this.profesEncontrados.push(this.profes[i]);
    }

    for (let i = 0; i < this.profes.length; i++){
      profe = this.profes[i].lastname.toLowerCase();
      if (profe.indexOf(ev.srcElement.value.toLowerCase()) != -1)
        this.profesEncontrados.push(this.profes[i]);
    }

    if (!ev.srcElement.value) {
      this.profesEncontrados = this.profes;
    }
  }

  //Cancela búsqueda (muestra todos los instructores)
  cancelarBusqueda() {
    this.profesEncontrados = this.profes;
  }

  //Abre pantalla para crear nuevo instructor
  async nuevoInstructor() {
    const modal = await this.modalController.create({
      component: CrearInstructorComponent,
      componentProps: { user: this.user }
    });
    return await modal.present();
  }

  //Abre pantalla para ver datos del instructor
  async instructor(instructor:any) {
    const modal = await this.modalController.create({
      component: InstructorComponent,
      componentProps: { instructor: instructor, user: this.user }
    });
    return await modal.present();
  }

  //Elimina un instructor
  eliminarInstructor(){
    confirm("estás seguro?");
  }

}
