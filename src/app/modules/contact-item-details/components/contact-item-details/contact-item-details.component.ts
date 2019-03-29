import { Component, OnInit,OnChanges, Input} from '@angular/core';

@Component({
  selector: 'app-contact-item-details',
  templateUrl: './contact-item-details.component.html',
  styleUrls: ['./contact-item-details.component.scss']
})
export class ContactItemDetailsComponent implements OnInit, OnChanges {
  @Input() selectedContact: object = null;
  imageUrl : string;
  rating: number;
  description: string;
  name: string;
  likes: Array<string>;
  dislikes: Array<string>;
  stars: boolean[] = new Array(5);

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.selectedContact) {
      this.name = this.selectedContact["name"];
      this.imageUrl = this.selectedContact["img"];
      this.rating = this.selectedContact["rating"];
      this.description = this.selectedContact["Description"];
      this.likes = this.selectedContact["Likes"];
      this.dislikes = this.selectedContact["Disikes"];
      this.fillRatingStars();   
    }
 }



 fillRatingStars() {
  this.stars.fill(false);
  for (let i=0;i<this.rating;i++) {
    this.stars[i]=true;
  }
}

}
