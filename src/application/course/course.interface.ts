import { Course } from "src/domain/course.entity";

export abstract class ICourseService {
    abstract getAll(): Course[]
    abstract getById(id: number): Course
}