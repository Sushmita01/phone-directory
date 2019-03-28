import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ContactListModule } from './modules/contact-list/contact-list.module';
import { ContactItemDetailsModule } from './modules/contact-item-details/contact-item-details.module';
import { DirectoryManagementModule} from './modules/directory-management/directory-management.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AppRoutingModule } from './app.routing'; 
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ContactFilterPipe } from './contact-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ContactFilterPipe,
    
  ],
  imports: [
    AppRoutingModule, HttpClientModule, BrowserModule, BrowserAnimationsModule, FormsModule, ReactiveFormsModule, ContactListModule, DirectoryManagementModule, ContactItemDetailsModule
  ],
  providers: [ContactFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
