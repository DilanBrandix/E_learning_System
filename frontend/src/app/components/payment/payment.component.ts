import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LearningService } from 'src/app/services/learning.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  courseID: any;
  constructor(
    private learningService: LearningService,
    private router: Router,
    private activatedroute: ActivatedRoute
  ) {
    this.courseID = this.activatedroute.snapshot.paramMap.get('id') || '';
  }

  header: string = '';
  cardType: string = '';
  cardnumber: any;

  cards: any;

  ngOnInit() {
    this.viewOneCourses(this.courseID);
  }
  viewOneCourses(courseid: any) {
    const data = { courseid: courseid };
    this.learningService.getoneCourses(data).subscribe({
      next: (res) => {
        this.cards = res;
        console.log(this.cards)
      },
      error: (err) => {
        alert('Error -' + err);
      },
    });
  }
}
