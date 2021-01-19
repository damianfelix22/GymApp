import { getAllLifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  constructor(private apiService: ApiService) {
  }
  getAll() {
    return this.apiService.getData('/alumnos');
  }

  post(data: JSON) {
    return this.apiService.postData('/alumnos', data);
  }
  
  putById(data: JSON) {
    return this.apiService.putData('/alumnos', data);
  }

}
