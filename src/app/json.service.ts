//Servicio creado para el consumo de https://proyectatufuturo.app:7444/menu
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';//Se hace uso de la libreria de Http client para obtener el metodo de Get

@Injectable({
  providedIn: 'root'
})
export class JsonService {

  constructor(private http: HttpClient) { }
  getJson(url: string){//para el uso del servicio se tiene que mandar el url del servicio que se va a consumir
    return this.http.get(url);
  }
}
