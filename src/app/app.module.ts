import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';

import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    BrowserAnimationsModule,
    MatCardModule
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
   
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

