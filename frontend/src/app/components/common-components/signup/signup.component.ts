import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private loginService: LoginService, private router: Router) {}

  email: string = '';
  firstName: string = '';
  lastName: string = '';
  password: string = '';
  cluster: string = '';
  errorStatus: boolean = false;
  errorMessage: string = '';
  visible: boolean = false;
  warningMessage = '';
  sbu: any;

  statusInputTouched: boolean = false;
  passwordInputTouched: boolean = false;

  selectedSbu: any;

  signup(){
    const userdetails = {
      fullName: this.firstName+''+this.lastName,
      password: this.password,
      username: this.email,
      userRole: 'student',
      accessType: '0'
    };
    if (userdetails.username === '' || userdetails.password === '' || userdetails.username === '') {
      this.errorStatus = true;
      this.errorMessage = 'All Fields Are Required';
    }
    else{
    this.loginService.createUsers(userdetails).subscribe({
      next: (data: any) => {

        if(data){
          this.visible = true;
          this.warningMessage = 'Your Account Was Registered Successfully'
        }

      },error: (error: any) => {
        alert('Error - '+ error)
      }
    })
  }

  }

  closeDialog() {
    this.router.navigate(['login']);
    this.visible = false;
  }
}
