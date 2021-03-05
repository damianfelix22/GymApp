import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent implements OnInit {

  user: any = {
    name: 'Nombre',
    lastname: 'Apellido',
    avatar: 'https://cdn2.f-cdn.com/contestentries/1316431/24595406/5ae8a3f2e4e98_thumb900.jpg',
  }

  constructor(private router: Router) {}

  ngOnInit() {}

  myProfile(){
    this.router.navigateByUrl('user')
  }

}
