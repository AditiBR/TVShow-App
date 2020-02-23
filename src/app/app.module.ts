import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DisplayShowsComponent } from './display-shows/display-shows.component';
import { DisplayShowsService } from './display-shows.service'
import { HttpClientModule } from '@angular/common/http';
import { SearchShowComponent } from './search-show/search-show.component'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    AppComponent,
    DisplayShowsComponent,
    SearchShowComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [DisplayShowsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
