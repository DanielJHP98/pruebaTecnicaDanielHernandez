import { Component } from "@angular/core";
import { JsonService } from "src/app/json.service";

@Component({
    selector: 'Sbr',
    templateUrl: './Sidebar.component.html',
    styleUrls: ['./Sidebar.component.css']
})
export class Sidebar {
    menu: Array<any> = [];
    constructor(public json: JsonService) {
        this.json.getJson('https://proyectatufuturo.app:7444/menu').subscribe(res => {
            res.menu.forEach(element => {
                this.menu.push(element);
            })
            console.log(this.menu);
        })
    }
}