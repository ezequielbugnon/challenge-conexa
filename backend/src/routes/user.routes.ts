import { Router } from 'express';
import UserController from '../controllers/user.controller';
import { verify } from '../jwt/jwt';

class UserRouter {

    private router: Router;
    private userController: UserController

    constructor() {
        this.router = Router();
        this.userController = new UserController();
        this.routes();
    }

    private routes() {
        this.router.get('/user/profile', verify, this.userController.profile);
        this.router.post('/user/signin', this.userController.signIn);
        this.router.post('/user/signup', this.userController.signUp);
    }

    public start(): Router{
        return this.router;
    }

}


const userRouter = new UserRouter();

export default userRouter.start();