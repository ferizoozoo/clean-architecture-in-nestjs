import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InfrastructureModule } from './modules/infrastructure/infrastructure.module';
import { BusinessModule } from './modules/business/business.module';

@Module({
  imports: [InfrastructureModule, BusinessModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
