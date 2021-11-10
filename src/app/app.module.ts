import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';//se importa el modulo para el uso http client
import { Sidebar } from './components/Sidebar/Sidebar.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    Sidebar
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
