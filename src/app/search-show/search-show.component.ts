import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DisplayShowsService } from '../display-shows.service';

@Component({
  selector: 'app-search-show',
  templateUrl: './search-show.component.html',
  styleUrls: ['./search-show.component.css']
})
export class SearchShowComponent implements OnInit {

  @Output() searchEvent = new EventEmitter<string>();

  search = new FormControl();
  constructor(private displayShowsService: DisplayShowsService) { }

  ngOnInit(): void {
    this.search.valueChanges.subscribe((searchValue: string) => {
      if(searchValue){
        this.searchEvent.emit(searchValue);      
      }
    })
  }

}
