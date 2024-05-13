import { Injectable } from '@angular/core';
import { jwtDecode } from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  constructor() { }

  isloggedin(){
    if(localStorage.getItem('userToken')){
      return true;
    }else{
      return false
    }
  }
}
