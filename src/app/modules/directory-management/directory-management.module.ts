import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectoryManagementComponent } from './components/directory-management/directory-management.component';
import { ContactListModule } from '../contact-list/contact-list.module';
import { ContactItemDetailsModule } from '../contact-item-details/contact-item-details.module';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  imports: [
    CommonModule, ContactListModule, ContactItemDetailsModule
  ],
  declarations: [DirectoryManagementComponent, HeaderComponent],
  exports:[DirectoryManagementComponent]
})
export class DirectoryManagementModule { }
