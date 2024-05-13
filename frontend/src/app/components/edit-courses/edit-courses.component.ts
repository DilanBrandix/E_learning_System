import { Component } from '@angular/core';
import { LearningService } from 'src/app/services/learning.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-courses',
  templateUrl: './edit-courses.component.html',
  styleUrls: ['./edit-courses.component.css']
})
export class EditCoursesComponent {
  constructor(private learningService:LearningService,
    private router: Router
  ){}

  cards:any;

  ngOnInit() {

    this.viewAllCourses();

  }

  viewAllCourses(){
    this.learningService.getallCourses()
  .subscribe({
    next:(res)=>{
      this.cards = res;
      // console.log(res);
    },
    error:(err)=>{
      alert("Error -" +err)
    }
  })
  }

  deletecourse(couseid:any){

  }

  editcourse(couseid:any){

  }
}
