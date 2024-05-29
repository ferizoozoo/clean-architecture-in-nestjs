import { Injectable } from '@nestjs/common';
import { Course } from 'src/domain/course.entity';
import { IDataRepository } from 'src/infrastructure/data/data.service';
import { ICourseService } from './course.interface';

@Injectable()
export class CourseService implements ICourseService {
    constructor(private readonly courseRepo: IDataRepository<Course>) {}

    getAll(): Course[] {
        return this.courseRepo.getAll();
    }

    getById(id: number) {
        return this.courseRepo.getById(id);
    }
}
