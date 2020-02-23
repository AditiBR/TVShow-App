import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DisplayShowsComponent } from './display-shows/display-shows.component';
import { DisplayShowsService } from './display-shows.service'
import { HttpClientModule } from '@angular/common/http';
import { SearchShowComponent } from './search-show/search-show.component'

import { MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import 'hammerjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import{ FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';





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
