import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.page.html',
  styleUrls: ['./clases.page.scss'],
})
export class ClasesPage implements OnInit {

  user: any = {
    name: 'Pedro',
    lastname: 'Suarez',
    user_role: 'admin'
  }

  clases: any[] = ["TAEKWONDO", "SPINNING", "FUNCIONAL", "CROSSFIT"];

  constructor() { }

  ngOnInit() {
  }

}
