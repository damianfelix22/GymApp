import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // !env vars
  apiURL: string;

  constructor(private httpClient: HttpClient) {
    // Declara la variable de la API
    this.apiURL = 'http://localhost/Proyectos/APItallerV2/public/';
  }

  getData(endpoint: string): Observable<any> {
    return this.httpClient.get(this.apiURL + endpoint);
  }

  postData(endpoint: string, body): Observable<any> {
    return this.httpClient.post(this.apiURL + endpoint, body);
  }

  putData(endpoint: string, body): Observable<any> {
    return this.httpClient.put(this.apiURL + endpoint, body);
  }

  deleteData(endpoint: string): Observable<any> {
    return this.httpClient.delete(this.apiURL + endpoint);
  }
  
}
