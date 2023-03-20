"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const mock_data_1 = require("../data/mock_data");
const create_post_dto_1 = __importDefault(require("../dto/create-post.dto"));
let PostsService = class PostsService {
    constructor(postService) {
        this.postService = postService;
    }
    async getPosts() {
        return await this.postService.find();
    }
    getPost(postId) {
        const id = Number(postId);
        return new Promise((resolve) => {
            const post = mock_data_1.posts.find((post) => post.id === id);
            if (!post) {
                throw new common_1.HttpException('Post not found', 404);
            }
            resolve(post);
        });
    }
    async addPost(post) {
        return await this.postService.save(post);
    }
    deletePost(postId) {
        const id = Number(postId);
        return new Promise((resolve) => {
            const index = mock_data_1.posts.findIndex((post) => post.id === id);
            if (index === -1) {
                throw new common_1.HttpException('Post not found', 404);
            }
            mock_data_1.posts.splice(index, 1);
            resolve(mock_data_1.posts);
        });
    }
};
PostsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(create_post_dto_1.default)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PostsService);
exports.PostsService = PostsService;
//# sourceMappingURL=posts.service.js.map