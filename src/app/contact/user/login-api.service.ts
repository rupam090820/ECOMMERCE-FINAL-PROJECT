import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginApiService {

  constructor(private http:HttpClient) { }
  // user signup for json server
  signup(userdata:any){
    return this.http.post('http://localhost:4000/signup', userdata);
  }

  // login for json server
  login(logindata:any){
    return this.http.post('http://localhost:4000/login',logindata);
  }
}
