import { Request, Response } from 'express';
import axios from 'axios';

class PostController{
    public async getPosts(req: Request, res: Response):Promise<any>{
        try {
            const response = await axios('https://jsonplaceholder.typicode.com/posts');
            res.json(response.data).status(200);
        } catch (error) {
            console.log(error);
            res.status(404).json('Posts not found');
        }
     
    }
}

export default PostController;