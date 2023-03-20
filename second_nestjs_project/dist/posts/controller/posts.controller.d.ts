import CreatePostDto from '../dto/create-post.dto';
import { PostsService } from '../service/posts.service';
export declare class PostsController {
    private readonly postService;
    constructor(postService: PostsService);
    getPosts(): Promise<any>;
    getCourse(postId: any): Promise<any>;
    addPost(postUpload: CreatePostDto): Promise<CreatePostDto>;
    deletePost(id: string): Promise<any>;
}
