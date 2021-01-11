import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {

  user: any = {
    name: 'Pedro',
    lastname: 'Suarez',
    user_role: 'admin'
  }

  constructor(private menu: MenuController) {}

  ngOnInit() { }
  
  openMenu() {
    this.menu.enable(true, 'menu');
    this.menu.open('menu');
  }


}
