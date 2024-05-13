import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Courses } from 'src/courses/model/course.entity';
import { courseDetails } from 'src/courses/model/course.interface';

@Injectable()
export class CoursesService {
  constructor(
    @InjectDataSource('test')
    private testDataSource: DataSource,
  ) {}

  async createCourse(courseDetails: courseDetails) {
    try {
      const courses = await this.testDataSource.manager
        .getRepository(Courses)
        .save(courseDetails);

      return courses;
    } catch (error) {
      return { error: error };
    }
  }

  async getallCourses() {
    const courseDetails = await this.testDataSource.query(`SELECT  [id]
    ,[courseId]
    ,[cardHeader]
    ,[cardSubHeading]
    ,[imgPath]
    ,[filePath]
    ,[courseDescription]
    ,[numberofLessons]
    ,[rating]
    ,[ratingValue]
    ,[courcePrice]
    ,[created_at]
    FROM [test].[dbo].[CourseDetails]`);

    return courseDetails;
  }

  async getoneCourses(courseid: any) {
    const courseDetails = await this.testDataSource.query(`SELECT  [id]
    ,[courseId]
    ,[cardHeader]
    ,[cardSubHeading]
    ,[imgPath]
    ,[filePath]
    ,[courseDescription]
    ,[numberofLessons]
    ,[rating]
    ,[ratingValue]
    ,[courcePrice]
    ,[created_at]
    FROM [test].[dbo].[CourseDetails] where courseId = '${courseid}'`);

    return courseDetails;
  }
}
