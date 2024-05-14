import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { CoursesService } from 'src/courses/services/courses/courses.service';
import { courseDetails } from 'src/courses/model/course.interface';

@Controller('courses')
export class CoursesController {
  constructor(private courseService: CoursesService) {}

  @Post('createCourse')
  async createCourse(@Body() CourseData: courseDetails): Promise<any> {
    return this.courseService.createCourse(CourseData);
  }

  @Get('getAllCourses')
  async GetCourses(): Promise<any> {
    return this.courseService.getallCourses();
  }

  @Post('getOneCourses')
  async GetoneCourses(@Body() data: any): Promise<any> {
    return this.courseService.getoneCourses(data.courseid);
  }

  @Delete('deleteCourses/:id')
  deleteCourse(@Param('id') courseId: string): Promise<any> {
    return this.courseService.deleteCourses(courseId);
  }

  @Put('updateCourses/:id')
  updateCourse(
    @Param('id') courseId: string,
    @Body() CourseData: courseDetails,
  ): Promise<any> {
    return this.courseService.updateCourses(courseId, CourseData);
  }
}
