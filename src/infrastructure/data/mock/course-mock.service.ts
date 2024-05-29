import { Course } from "src/domain/course.entity";
import { IDataRepository } from "../data.service";
import { Injectable } from "@nestjs/common";

@Injectable()
export class CourseMockRepository implements IDataRepository<Course> {
    private courses: Course[]

    constructor() {
        this.courses = [
            {
                id: '1',
                Title: 'math'
            },
            {
                id: '2',
                Title: 'physics'
            }
        ]
    }

    getAll(): Course[] {
        return this.courses;
    }
    getById(id: any): Course {
        return this.courses.find(course => course.id == id)
    }
}