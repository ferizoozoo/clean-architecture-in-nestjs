import { Module } from '@nestjs/common';
import { IStudentService } from 'src/application/student/student.interface';
import { StudentService } from 'src/application/student/student.service';
import { StudentController } from 'src/controllers/student/student.controller';
import { IDataRepository } from 'src/infrastructure/data/data.service';
import { StudentMockRepository } from 'src/infrastructure/data/mock/student-mock.service';

@Module({
    providers: [
        { provide: IStudentService, useClass: StudentService },
        { provide: IDataRepository, useClass: StudentMockRepository }
    ],
    controllers: [StudentController],
    exports: [IStudentService]
})
export class StudentModule {}
