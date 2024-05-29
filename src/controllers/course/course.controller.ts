import { Controller, Get, Param } from '@nestjs/common';
import { ICourseService } from 'src/application/course/course.interface';

@Controller('course')
export class CourseController {
    constructor(private readonly courseService : ICourseService) {}

    @Get()
    getAll() {
        return this.courseService.getAll();
    }

    @Get(':id')
    getById(@Param('id') id: number) {
        return this.courseService.getById(id);
    }
}
