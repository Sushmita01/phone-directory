import { Component, OnInit, OnChanges, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact-list-container',
  templateUrl: './contact-list-container.component.html',
  styleUrls: ['./contact-list-container.component.scss']
})
export class ContactListContainerComponent implements OnInit, OnChanges {
@Input() contactNames;
@Output() contactSelectEvent : EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }


  ngOnChanges() {
    console.log(this.contactNames);
  }

  contactSelect(index) {
    this.contactSelectEvent.emit(index);
  }

}
