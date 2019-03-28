import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, retry, catchError } from 'rxjs/operators';
import *  as config from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetContactsService {

  constructor(private http: HttpClient) { }


  getContactDetails(){
    let headers= new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    let getContactsURL= config.environment.getContactList;

    return this.http.get(getContactsURL); 
  }
}
