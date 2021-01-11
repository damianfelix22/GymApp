import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rutinas-button',
  templateUrl: './rutinas-button.component.html',
  styleUrls: ['./rutinas-button.component.scss'],
})
export class RutinasButtonComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { }
  
  navigate() {
    this.router.navigateByUrl('rutinas');
  }

}
