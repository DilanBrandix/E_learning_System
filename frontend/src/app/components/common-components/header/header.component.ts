import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { UserDetailsService } from 'src/app/services/user-details.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(public userService: UserDetailsService,
    private loginService: LoginService,
  ){}
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Categories',
        items: [
          {
            label: 'Web Development',
            items: [
              {
                label: 'React JS',
              },
              {
                label: 'Angular',
              },
              {
                label: 'Node JS',
              },
              {
                label: 'JavaScript',
              },
            ],
          },
          {
            label: 'Data Science',
            items: [
              {
                label: 'Machine Learning',
              },
              {
                label: 'Deep Learning',
              },
              {
                label: 'Python',
              },
              {
                label: 'Artificial Intelligence',
              },
            ],
          },
          {
            separator: true,
          },
          {
            label: 'Management',
            items: [
              {
                label: 'Product Management',
              },
              {
                label: 'Project Management',
              },
              {
                label: 'Quality Management',
              },
              {
                label: 'Skills Management',
              },
            ],
          },
          {
            label: 'Sales',
            items: [
              {
                label: 'Sales Skills',
              },
              {
                label: 'B2B Sales',
              },
              {
                label: 'Customer Service',
              },
              {
                label: 'Business Development',
              },
            ],
          },
        ],
      },
    ];
  }

  logout(){
    this.loginService.logout();
  }
}
