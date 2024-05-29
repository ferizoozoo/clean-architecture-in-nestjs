import { Controller, Get, Param } from '@nestjs/common';
import { IStudentService } from 'src/application/student/student.interface';

@Controller('student')
export class StudentController {
    constructor(private readonly studentService: IStudentService) {}

    @Get()
    getAll() {
        return this.studentService.getAll();
    }

    @Get(':id')
    getById(@Param('id') id: number) {
        return this.studentService.getById(id);
    }
}
