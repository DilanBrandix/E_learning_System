import { Module } from '@nestjs/common';
import { CoursesService } from './services/courses/courses.service';
import { CoursesController } from './controllers/courses/courses.controller';
import { Courses } from './model/course.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Courses], 'test')],
  providers: [CoursesService],
  controllers: [CoursesController],
})
export class CoursesModule {}
