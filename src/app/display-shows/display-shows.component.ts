import { Component, OnInit } from '@angular/core';
import { IDisplayShows } from '../idisplay-shows';

@Component({
  selector: 'app-display-shows',
  templateUrl: './display-shows.component.html',
  styleUrls: ['./display-shows.component.css']
})
export class DisplayShowsComponent implements OnInit {

  displayShows: IDisplayShows
  constructor() {
    this.displayShows ={
      name:'showname',
      language:'english'
   } as IDisplayShows
  }

  ngOnInit(): void {
  }

}
