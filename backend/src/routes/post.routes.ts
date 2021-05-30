import { Router } from 'express';
import PostController from '../controllers/post.controller';

class PostRouter{
    private router: Router;
    private postController: PostController;

    constructor(){
        this.router = Router();
        this.postController = new PostController();
        this.routes();
    }

    private routes():void {
        this.router.get('/posts', this.postController.getPosts);
    }

    public start():Router{
        return this.router;
    }
 
}

const postRoutes = new PostRouter();

export default postRoutes.start();