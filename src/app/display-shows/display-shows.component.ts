import { Component, OnInit, Input } from '@angular/core';
import { IDisplayShows } from '../idisplay-shows';
import { DisplayShowsService } from '../display-shows.service';

@Component({
  selector: 'app-display-shows',
  templateUrl: './display-shows.component.html',
  styleUrls: ['./display-shows.component.css']
})
export class DisplayShowsComponent implements OnInit {

  @Input() showInfo: IDisplayShows
  displayShows: IDisplayShows
  constructor(private displayShowService: DisplayShowsService) { }

  ngOnInit(): void {   
    
  }

}
