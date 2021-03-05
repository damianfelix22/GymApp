import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases-button',
  templateUrl: './clases-button.component.html',
  styleUrls: ['./clases-button.component.scss'],
})
export class ClasesButtonComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { }
  
  navigate() {
    this.router.navigateByUrl('clases');
  }

}
