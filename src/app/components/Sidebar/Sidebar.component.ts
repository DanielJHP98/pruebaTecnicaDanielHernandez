import { Component } from "@angular/core";
import { JsonService } from "src/app/json.service";

@Component({
    selector: 'Sbr',
    templateUrl: './Sidebar.component.html',
    styleUrls: ['./Sidebar.component.css']
})
export class Sidebar {
    menu: Array<any> = []; //Se define l variable menu que sera la que contenga los elementos a desplegar del menú
    constructor(public json: JsonService) {
        this.json.getJson('https://proyectatufuturo.app:7444/menu').subscribe(res => {
            res.menu.forEach(element => {//Se itera sobre el resultado devuelto del response
                this.menu.push(element);//Se agrega cada elemento a menu
            })
        })
    }
}