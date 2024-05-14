import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LearningService {

  constructor(private http: HttpClient, private router: Router) { }
  production= true;
  private apiUrl = `${environment.api}`;

  public courseID:string = ''

  getallCourses() {
    return this.http.get<any>(`${this.apiUrl}/courses/getAllCourses`);
  }

  getoneCourses(data:any) {
    return this.http.post<any>(`${this.apiUrl}/courses/getOneCourses`,data);
  }

  deleteCourses(courseid:any) {
    return this.http.delete<any>(`${this.apiUrl}/courses/deleteCourses/:`+courseid);
  }

  updateCourses(courseid:any,courseDetails:any) {
    return this.http.put<any>(`${this.apiUrl}/courses/'updateCourses/:id`+courseid,courseDetails);
  }
}
