import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IMAGES as IMAGES } from '../../../../../environments/config.all';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  searchString: string = "";
  barExpanded: boolean = false;
  profileImage: string;
  @Output() stringSearch: EventEmitter<string> = new EventEmitter();
  @Output() sidebarToggled: EventEmitter<boolean> = new EventEmitter();


  constructor() { 
    this.profileImage='../../../../../assets/images/girl.png';  
  }

  ngOnInit() {
  }

  searchDirectory(event) {
    this.searchString = event.srcElement.value;
    this.stringSearch.emit(this.searchString);
 }

 toggle() {
  this.barExpanded = !this.barExpanded;
  console.log("bar status",this.barExpanded);
  this.sidebarToggled.emit(this.barExpanded);
 }
}

