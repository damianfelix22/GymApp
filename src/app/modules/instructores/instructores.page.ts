import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CrearInstructorComponent } from './crear-instructor/crear-instructor.component';
import { InstructorComponent } from './instructor/instructor.component';

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
      avatar: 'https://ionicframework.com/docs/demos/api/avatar/avatar.svg',
      state: 'activo'
    },
    {
      name: "Felipe",
      lastname: "Miguel",
      age: 24,
      avatar: 'https://ionicframework.com/docs/demos/api/avatar/avatar.svg',
      state: 'inactivo'
    },
    {
      name: "Carlos",
      lastname: "Tevez",
      age: 22,
      avatar: 'https://ionicframework.com/docs/demos/api/avatar/avatar.svg',
      state: 'activo'
    },
    {
      name: "Ramón",
      lastname: "Avila",
      age: 35,
      avatar: 'https://ionicframework.com/docs/demos/api/avatar/avatar.svg',
      state: 'inactivo'
    }
  ]


  constructor(public modalController: ModalController, private router: Router) { }

  ngOnInit() {
    this.profesEncontrados = this.profes;
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
