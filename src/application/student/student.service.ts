import { Injectable } from '@nestjs/common';
import { Student } from 'src/domain/student.entity';
import { IDataRepository } from 'src/infrastructure/data/data.service';
import { IStudentService } from './student.interface';

@Injectable()
export class StudentService implements IStudentService {
    constructor(private readonly studentRepo: IDataRepository<Student>) {}

    getAll(): Student[] {
        return this.studentRepo.getAll();
    }

    getById(id: number) {
        return this.studentRepo.getById(id);
    }
}
