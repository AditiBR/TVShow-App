import { Component } from '@angular/core';
import { IDisplayShows } from './idisplay-shows';
import { DisplayShowsService } from './display-shows.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TVShow-App';

  displayShowInfo: IDisplayShows;

  constructor(private displayShowsService: DisplayShowsService){}

  doSearch(searchValue){   
    this.displayShowsService.getShowDetails(searchValue).subscribe(data => {     
      this.displayShowInfo = data}
      );
   
  }
}
