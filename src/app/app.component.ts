import { Component } from '@angular/core';
import { JsonService } from './json.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pruebaTecnicaDanielHernandez';
  constructor(public json: JsonService) {
    this.json.getJson('https://proyectatufuturo.app:7444/menu').subscribe((res: any) => {
      console.log(res);
    })
  }
}
