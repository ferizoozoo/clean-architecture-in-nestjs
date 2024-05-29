import { Module } from '@nestjs/common';
import { ICourseService } from 'src/application/course/course.interface';
import { CourseService } from 'src/application/course/course.service';
import { CourseController } from 'src/controllers/course/course.controller';
import { IDataRepository } from 'src/infrastructure/data/data.service';
import { CourseMockRepository } from 'src/infrastructure/data/mock/course-mock.service';

@Module({
    providers: [
        { provide: ICourseService, useClass: CourseService },
        { provide: IDataRepository, useClass: CourseMockRepository }
    ],
    controllers: [CourseController],
    exports: [ICourseService]
})
export class CourseModule { }
