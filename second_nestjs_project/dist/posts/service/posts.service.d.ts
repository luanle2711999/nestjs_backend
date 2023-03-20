import { Repository } from 'typeorm';
import CreatePostDto from '../dto/create-post.dto';
export declare class PostsService {
    private readonly postService;
    constructor(postService: Repository<CreatePostDto>);
    getPosts(): Promise<any>;
    getPost(postId: any): Promise<any>;
    addPost(post: CreatePostDto): Promise<CreatePostDto>;
    deletePost(postId: any): Promise<any>;
}
