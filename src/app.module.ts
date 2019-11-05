import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { DogsModule } from './dogs/dogs.module';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

import { Photo } from './photos/photo.entity';
import { PhotoModule } from './photos/photo.module';

@Module({
  imports: [
    CatsModule,
    DogsModule,
    PhotoModule,
    TypeOrmModule.forRoot({entities: [Photo]})
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
