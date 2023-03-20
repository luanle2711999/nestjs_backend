import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsController } from '../controller/posts.controller';
import CreatePostDto from '../dto/create-post.dto';
import { PostsService } from '../service/posts.service';

@Module({
  imports: [TypeOrmModule.forFeature([CreatePostDto])],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
