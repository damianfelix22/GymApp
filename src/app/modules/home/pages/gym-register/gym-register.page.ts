import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-gym-register',
  templateUrl: './gym-register.page.html',
  styleUrls: ['./gym-register.page.scss'],
})
export class GymRegisterPage implements OnInit {

  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
    lastname: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
    gymName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    pass1: new FormControl('', [Validators.required, Validators.minLength(6)]),
    pass2: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.router.navigateByUrl('gym');
  }

  atras(){
    this.router.navigateByUrl('home');
  }

}
