import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LearningService } from 'src/app/services/learning.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css'],
})
export class CourseDetailsComponent {
  courseID: any;
  constructor(
    private learningService: LearningService,
    private router: Router,
    private activatedroute: ActivatedRoute
  ) {
    this.courseID = this.activatedroute.snapshot.paramMap.get('id') || '';
  }

  header: string = '';

  cards: any;

  ngOnInit() {
    this.viewOneCourses(this.courseID);
  }
  viewOneCourses(courseid: any) {
    const data = { courseid: courseid };
    this.learningService.getoneCourses(data).subscribe({
      next: (res) => {
        this.cards = res;
        this.header = res[0];
      },
      error: (err) => {
        alert('Error -' + err);
      },
    });
  }

  buynow(courseid: any){
    this.router.navigate(['payment',courseid])
  }
}
