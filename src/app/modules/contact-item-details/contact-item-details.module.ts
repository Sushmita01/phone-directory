import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactItemDetailsComponent } from './components/contact-item-details/contact-item-details.component';
import {  MatIconModule } from '@angular/material';
@NgModule({
  imports: [
    CommonModule, MatIconModule
  ],
  declarations: [ContactItemDetailsComponent],
  exports: [ContactItemDetailsComponent]
})
export class ContactItemDetailsModule { }
