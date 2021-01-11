import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alumnos-button',
  templateUrl: './alumnos-button.component.html',
  styleUrls: ['./alumnos-button.component.scss'],
})
export class AlumnosButtonComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { }
  
  navigate() {
    this.router.navigateByUrl('alumnos');
  }

}
