import { Module } from '@nestjs/common';
import { CourseModule } from './course/course.module';
import { StudentModule } from './student/student.module';

@Module({
  imports: [CourseModule, StudentModule],
  exports: [CourseModule, StudentModule]
})
export class BusinessModule {}
