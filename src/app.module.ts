import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ArticlesModule } from './articles/articles.module';
import { UsersModule } from './users/users.module';

ConfigModule.forRoot();

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGODB_URL), ArticlesModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
