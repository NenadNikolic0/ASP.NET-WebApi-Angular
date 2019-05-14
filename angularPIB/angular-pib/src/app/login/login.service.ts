import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }


  getMessage() {
    return "Message from service";
  }




}
