import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instructor-button',
  templateUrl: './instructor-button.component.html',
  styleUrls: ['./instructor-button.component.scss'],
})
export class InstructorButtonComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { }
  
  navigate() {
    this.router.navigateByUrl('instructores');
  }

}
