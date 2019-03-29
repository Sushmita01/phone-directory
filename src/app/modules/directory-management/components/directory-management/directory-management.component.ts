import { Component, OnInit } from '@angular/core';
import { GetContactsService } from '../../../../services/get-contacts.service';
import { ContactFilterPipe } from '../../../../contact-filter.pipe';


interface contactDetail {
  "name": string,
  "rating": number,
  "img": string,
  "Description": string,
  "Likes": string[],
  "Disikes": string[],
} 

@Component({
  selector: 'app-directory-management',
  templateUrl: './directory-management.component.html',
  styleUrls: ['./directory-management.component.scss']
})
export class DirectoryManagementComponent implements OnInit {
  public contactList: Array<contactDetail> = [];
  public filteredContactList: Array<contactDetail> = [];
  public contactNames: Array<string>;
  public selectedContact: object;
  public searchString: string = null;

  constructor(private contactService: GetContactsService, private contactFilter: ContactFilterPipe) { }

  ngOnInit() {
    this.getContactDetails();
  }

  contactSelected(idx) {
    this.selectedContact=this.filteredContactList[idx];
  }
  

  getContactDetails() {
    this.contactService.getContactDetails().subscribe((data)=> {
      this.contactList= data["People"];
      this.filteredContactList = this.contactFilter.transform(this.contactList,this.searchString);
      this.contactNames = this.filteredContactList.map((elem)=> elem.name);
    });
  }

  directorySearch(event) {
    this.searchString= event;
    console.log("Searching by",event);
    this.filteredContactList=this.contactFilter.transform(this.contactList,this.searchString);
    this.contactNames = this.filteredContactList.map((elem)=> elem.name);
    console.log(this.contactNames);

 }

}
