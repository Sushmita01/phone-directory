import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contactFilter'
})
export class ContactFilterPipe implements PipeTransform {

  transform(value: any[], searchTerm?: string): any {
    console.log("hit piper",value)
    if (searchTerm) {
        let returnArr = value;
        value.map((contact)=> {
          if (contact.name.indexOf(searchTerm)!=-1) {
            returnArr.push(contact);
          }
        });
        return returnArr;
    }
    else return value;
  }

}
