import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contactFilter'
})
export class ContactFilterPipe implements PipeTransform {

  transform(value: any[], searchTerm?: string): any {
    if (searchTerm) {
      console.log(searchTerm);
        let returnArr = [];
        value.map((contact)=> {
          if (contact.name.toLowerCase().startsWith(searchTerm.toLowerCase())) {
            returnArr.push(contact);
          }
        });
        return returnArr;
    }
    else return value;
  }

}
