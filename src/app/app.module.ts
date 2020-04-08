import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AndrewCompComponent } from './andrew-comp/andrew-comp.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule,AndrewCompComponent],
  declarations: [ AppComponent, HelloComponent, AndrewCompComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
