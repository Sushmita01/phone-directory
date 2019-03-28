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
  public contactNames: Array<string>;
  public selectedContact: object;
  constructor(private contactService: GetContactsService, private contactFilter: ContactFilterPipe) { }

  ngOnInit() {
    this.getContactDetails();
  }

  contactSelected(e) {
    this.selectedContact=this.contactList[e];
  }
  

  getContactDetails() {
    this.contactService.getContactDetails().subscribe((data)=> {
      let list= data["People"];
      this.contactList = this.contactFilter.transform(list,null);
      this.contactNames = this.contactList.map((elem)=> elem.name)
    })
  }

}
