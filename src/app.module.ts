import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController], // take URL and excute function & roll of controller in NestJS is simillar to router in expressJS
  providers: [AppService],
})
export class AppModule {}
