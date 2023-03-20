import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { posts } from '../data/mock_data';
import CreatePostDto from '../dto/create-post.dto';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(CreatePostDto)
    private readonly postService: Repository<CreatePostDto>,
  ) {}
  async getPosts(): Promise<any> {
    return await this.postService.find();
  }

  getPost(postId): Promise<any> {
    return new Promise((resolve) => {
      const data = this.postService.findOne(postId);
      resolve(data);
    });
  }

  async addPost(post: CreatePostDto): Promise<CreatePostDto> {
    return await this.postService.save(post);
  }

  deletePost(postId): Promise<any> {
    return new Promise((resolve) => {
      const itemDeleted = this.postService.delete(postId);
      resolve(itemDeleted);
    });
  }
}
