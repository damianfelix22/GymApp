import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
    lastname: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
    gymName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    pass1: new FormControl('', [Validators.required, Validators.minLength(6)]),
    pass2: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    alert("Usuario Creado");
  }

  atras(){
    this.router.navigateByUrl('home');
  }

}
