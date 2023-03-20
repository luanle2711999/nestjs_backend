import { Controller, Get, Param, Post, Body, Delete } from '@nestjs/common';
import CreatePostDto from '../dto/create-post.dto';
import { PostsService } from '../service/posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postService: PostsService) {}

  @Get('/getPosts')
  async getPosts() {
    const posts = await this.postService.getPosts();
    return posts;
  }

  @Get(':postId')
  async getCourse(@Param('postId') postId) {
    const post = await this.postService.getPost(postId);
    return post;
  }

  @Post('/createPost')
  async addPost(@Body() postUpload: CreatePostDto) {
    const post = await this.postService.addPost(postUpload);
    return post;
  }

  @Delete(':id')
  async deletePost(@Param('id') id: string) {
    const post = await this.postService.deletePost(id);
    return post;
  }
}
