import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DisplayShowsComponent } from './display-shows/display-shows.component';
import { DisplayShowsService } from './display-shows.service'

@NgModule({
  declarations: [
    AppComponent,
    DisplayShowsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DisplayShowsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
