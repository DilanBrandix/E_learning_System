import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './components/common-components/courses/courses.component';
import { HomeComponent } from './components/common-components/home/home.component';
import { LoginComponent } from './components/common-components/login/login.component';
import { SignupComponent } from './components/common-components/signup/signup.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { PaymentComponent } from './components/payment/payment.component';
import { EditCoursesComponent } from './components/edit-courses/edit-courses.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'coursedetails/:id', component: CourseDetailsComponent },
  { path: 'payment/:id', component: PaymentComponent },
  { path: 'editCourse', component: EditCoursesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
