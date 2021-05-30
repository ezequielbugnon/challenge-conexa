import { Request, Response } from 'express';

class UserController{
    public getUser(req: Request, res: Response): void{
        res.json('hola user de nuevo');
    }
}

export default UserController;