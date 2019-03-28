import { Component, OnInit,OnChanges, Input} from '@angular/core';

@Component({
  selector: 'app-contact-item-details',
  templateUrl: './contact-item-details.component.html',
  styleUrls: ['./contact-item-details.component.scss']
})
export class ContactItemDetailsComponent implements OnInit, OnChanges {
  @Input() selectedContact: object = null;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log(this.selectedContact);
  }

}
