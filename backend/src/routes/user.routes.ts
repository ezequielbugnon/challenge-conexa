import { Router } from 'express';
import UserController from '../controllers/user.controller';


class UserRouter {

    private router: Router;
    private userController: UserController

    constructor() {
        this.router = Router();
        this.userController = new UserController();
        this.routes();
    }

    private routes() {
        this.router.get('/user', this.userController.getUser);
    }

    public start(): Router{
        return this.router;
    }

}


const userRouter = new UserRouter();

export default userRouter.start();