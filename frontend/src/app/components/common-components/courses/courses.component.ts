import { Component } from '@angular/core';
import { LearningService } from 'src/app/services/learning.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {

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

  enroll(courseId:any){
    this.router.navigate(['coursedetails',courseId])
  }

}
