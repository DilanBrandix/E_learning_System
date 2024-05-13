import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
// import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private router: Router) { }
  production= true;
  private apiUrl = `${environment.api}`;

  findUsers(user: any) {
    return this.http.post<any>(`${this.apiUrl}/users/login`, user);
  }

  createUsers(user: any) {
    return this.http.post<any>(`${this.apiUrl}/users/createUser`, user);
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('userToken');

    if (!localStorage.getItem('userToken')) {
      this.router.navigate(['']);
    }
    window.location.reload();
  }
}
