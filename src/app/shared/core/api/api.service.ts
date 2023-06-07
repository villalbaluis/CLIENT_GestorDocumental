import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  /** 
   * API de la aplicación, en este caso será
   * levantada de manera local en el puerto 3000
  */
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  /**
   * Seteo de rutas para consumir el servicio
   * de la API levantada en el puerto 3000 de 
   * manera local. 
  */

  public get(endpoint: string) {
    return this.http.get(`${this.apiUrl}/${endpoint}`);
  }

  public post(endpoint: string, data: any) {
    return this.http.post(`${this.apiUrl}/${endpoint}`, data);
  }

  public update(endpoint: string, data: any) {
    return this.http.put(`${this.apiUrl}/${endpoint}`, data);
  }

  public delete(endpoint: string) {
    return this.http.delete(`${this.apiUrl}/${endpoint}`);
  }

};
