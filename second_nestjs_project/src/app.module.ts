import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import CreatePostDto from './posts/dto/create-post.dto';
import { PostsModule } from './posts/module/posts.module';
import { PostsResolver } from './posts/resolver/posts.resolver';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'luan123456789',
      database: 'post',
      entities: [CreatePostDto],
      synchronize: true,
    }),
    PostsModule,
  ],
  controllers: [AppController],
  providers: [AppService, PostsResolver],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
