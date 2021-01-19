import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {

  $currentUser;

  private $currentUserSubject: BehaviorSubject<any> = new BehaviorSubject<any>({
    userId: null,
  });

  constructor(private apiService: ApiService) {
    this.$currentUser = this.$currentUserSubject.asObservable();
  }

  logIn(userData: JSON) {
    return this.apiService.postData('/login', userData);
  }

}
