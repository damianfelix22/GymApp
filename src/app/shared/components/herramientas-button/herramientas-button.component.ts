import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-herramientas-button',
  templateUrl: './herramientas-button.component.html',
  styleUrls: ['./herramientas-button.component.scss'],
})
export class HerramientasButtonComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { }
  
  navigate() {
    this.router.navigateByUrl('herramientas');
  }

}
