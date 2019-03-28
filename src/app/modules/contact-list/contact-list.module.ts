import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactListContainerComponent } from './components/contact-list-container/contact-list-container.component';
import { ContactItemComponent } from './components/contact-item/contact-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ContactListContainerComponent, ContactItemComponent],
  exports:[ContactListContainerComponent]
})
export class ContactListModule { }
