import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

@Module({
  imports: [UsersModule, TypeOrmModule.forRoot(), UsersModule],
  controllers: [AppController, UsersController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly connection: Connection){}
}
