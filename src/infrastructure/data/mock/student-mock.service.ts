import { Student } from "src/domain/student.entity";
import { IDataRepository } from "../data.service";
import { Injectable } from "@nestjs/common";

@Injectable()
export class StudentMockRepository implements IDataRepository<Student> {
    private students: Student[]

    constructor() {
        this.students = [
            {
                id: '1',
                Name: 'bob', 
                Age: 23,
                Grade: 2 
            },
            {
                id: '2',
                Name: 'alice', 
                Age: 28,
                Grade: 5 
            }
        ]
    }

    getAll(): Student[] {
        return this.students;
    }
    getById(id: any): Student {
        return this.students.find(student => student.id == id)
    }
}