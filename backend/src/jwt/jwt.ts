import jsonwebtoken from 'jsonwebtoken';
import { CONFIG_SECRET } from '../config';
import { Request, Response, NextFunction, response} from 'express';


export interface IPayload {
    _id: string;
} 

export const generate = (payload: object) => {
    const token = jsonwebtoken.sign(payload, CONFIG_SECRET ,{
                    expiresIn: 60 * 60 * 24
                 })
    return token;
}

export const verify = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('x-access');
  
    if(!token){
        return res.status(401).send({auth: false, token: 'No token provided' }) 
    }

    const decoded = await jsonwebtoken.verify(token, CONFIG_SECRET) as IPayload;

    req.userId = decoded._id;
    
    next();
}