import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { MyContact } from '../model/myContact';
import { catchError, Observable, throwError } from 'rxjs';
import { MyGroup } from '../model/myGroup';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  
  
  private baseUrl:string="http://localhost:4000";  // here store baseurl into one variable
  


  constructor(private http:HttpClient) { }
 // GET METHODE, GET ALL CONTACT DATA  FROM API
  public getAllContact():Observable<MyContact>{
    let dataUrl:string=`${this.baseUrl}/contacts`;
    return this.http.get<MyContact>(dataUrl).pipe(catchError(this.handleError))
  }

 
  // GET METHODE, GET SINGLE CONTACT DATA  FROM API
 public getContacts(contactsId:string):Observable<MyContact>{
  let dataUrl:string=`${this.baseUrl}/contacts/${contactsId}`
return this.http.get<MyContact>(dataUrl).pipe(catchError(this.handleError))
 }


 //POST METHODE ,, CREATE NEW CONTACTS INTO API
 public CreateContacts(contact:MyContact):Observable<MyContact>{
let dataUrl:string=`${this.baseUrl}/contacts`;
return this.http.post<MyContact>(dataUrl,contact).pipe(catchError(this.handleError))
 }

 //PUT METHODE ,, UPDATE CONTACT TO API
 public updateContacts(contact:MyContact,contactId:string):Observable<MyContact>{
  let dataUrl:string=`${this.baseUrl}/contacts/${contactId}`;
  return this.http.put<MyContact>(dataUrl,contact).pipe(catchError(this.handleError))
   }

   //DELETE METHODE ,, DELETE PERTICULAR  CONTACT TO API
 public deleteContacts(contactId:string):Observable<MyContact>{
  let dataUrl:string=`${this.baseUrl}/contacts/${contactId}`;
  return this.http.delete<MyContact>(dataUrl).pipe(catchError(this.handleError))
   }
// ============================= now group api ===================================================
// GET METHODE, GET ALL GROUP DATA  FROM API
public getAllgroup():Observable<MyGroup>{
  let dataUrl:string=`${this.baseUrl}/groups`;
  return this.http.get<MyGroup>(dataUrl).pipe(catchError(this.handleError))
}

  // GET METHODE, GET SINGLE groups DATA  FROM API
  public getGroups(contact:MyContact):Observable<MyContact>{
    let dataUrl:string=`${this.baseUrl}/contacts/${contact.groupId}`
  return this.http.get<MyContact>(dataUrl).pipe(catchError(this.handleError))
   }



  //errorsolved
  public handleError(error:HttpErrorResponse){
    let errorMessage:string='';
    if(error.error instanceof ErrorEvent){
      //client side error
      errorMessage=`Error:${error.error.message}`
    }
    else{
      //serverside error
      errorMessage=`Status: ${error.status} \n Message: ${error.message}`
    }
    return throwError(errorMessage)
  }
}
