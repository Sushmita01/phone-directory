import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactItemDetailsComponent } from './components/contact-item-details/contact-item-details.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ContactItemDetailsComponent],
  exports: [ContactItemDetailsComponent]
})
export class ContactItemDetailsModule { }
