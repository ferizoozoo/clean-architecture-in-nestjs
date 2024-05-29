import { Module } from '@nestjs/common';
import { CourseMockRepository } from 'src/infrastructure/data/mock/course-mock.service';
import { StudentMockRepository } from 'src/infrastructure/data/mock/student-mock.service';

@Module({
    providers: [CourseMockRepository, StudentMockRepository],
    exports: [CourseMockRepository, StudentMockRepository]
})
export class DataModule {}
