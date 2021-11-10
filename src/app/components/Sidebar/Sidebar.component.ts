import { Component } from "@angular/core";
import { JsonService } from "src/app/json.service";

@Component({
    selector: 'Sbr',
    templateUrl: './Sidebar.component.html',
    styleUrls: ['../../app.component.css']
})
export class Sidebar {
    constructor(public json: JsonService) {
        this.json.getJson('https://proyectatufuturo.app:7444/menu').subscribe((res: any) => {
            console.log(res);
        })
    }
}