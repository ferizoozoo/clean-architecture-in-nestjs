import { Student } from "src/domain/student.entity";

export abstract class IStudentService {
    abstract getAll(): Student[]
    abstract getById(id: number): Student
}