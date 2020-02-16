import { Component, OnInit } from '@angular/core';
import { IDisplayShows } from '../idisplay-shows';
import { DisplayShowsService } from '../display-shows.service';

@Component({
  selector: 'app-display-shows',
  templateUrl: './display-shows.component.html',
  styleUrls: ['./display-shows.component.css']
})
export class DisplayShowsComponent implements OnInit {

  displayShows: IDisplayShows
  constructor(private displayShowService: DisplayShowsService) { }

  ngOnInit(): void {
    this.displayShowService.getShowDetails('girls').subscribe(data => this.displayShows = data)
  }

}
