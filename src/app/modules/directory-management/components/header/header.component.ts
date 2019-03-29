import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  searchString: string = "";
  @Output() stringSearch: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  searchDirectory(event) {
    this.searchString = event.srcElement.value;
    this.stringSearch.emit(this.searchString);
 }
}

