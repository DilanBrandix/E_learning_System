import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor( private LoginService:LoginService, private router: Router) {}

  username: string = '';
  password: string = '';
  errorStatus: boolean = false;
  errorMessage: string = '';
  visible: boolean = false;
  warningMessage = '';

  onSubmit() {
    const credentials = {
      username: this.username,
      password: this.password,
    };

    if (credentials.username === '' || credentials.password === '') {
      this.errorStatus = true;
      this.errorMessage = 'Invalid Username or Password';
    } else {
      this.errorStatus = false;
      this.LoginService.findUsers(credentials).subscribe({
        next: (data: any) => {
          if(data.error){
            this.errorStatus = true;
            this.errorMessage = data.message;
          }else{
          localStorage.setItem('userToken', data.userToken);
          let decoded: any = jwtDecode(data.userToken);
          if(decoded.userRole === 'student'){
            this.router.navigate(['']);
          }else{
            this.router.navigate(['editCourse']);
          }
        }

        },
        error: (error: any) => {
          alert('Login Error - ' + error)
        },
      });
    }
  }

  onSignup(){
    this.router.navigate(['signup']);
  }

  closeDialog() {
    this.visible = false;
  }
}
