import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { APP_ROUTING } from "./routing";

import { DbConectionService } from './Services/db-conection.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    APP_ROUTING,

  ],
  providers: [DbConectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
