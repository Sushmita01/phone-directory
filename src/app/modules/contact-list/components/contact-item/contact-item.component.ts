import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.scss']
})
export class ContactItemComponent implements OnInit, OnChanges {
@Input() name;
@Input() selected: boolean;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log("selected is",this.name,this.selected)
  }


}
