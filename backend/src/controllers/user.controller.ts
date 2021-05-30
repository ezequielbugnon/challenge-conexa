import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import User, {IUser} from '../database/schema/user.shema';
import { generate } from '../jwt/jwt';
import {signupValidation, signinValidation} from '../validate/joi';

class UserController{
    public async profile(req: Request, res: Response){
        const user = await User.findById(req.userId, { password: 0 });
        if (!user) {
            return res.status(404).json('No User found');
        }
        res.json(user);
    }

    public async signIn(req: Request, res: Response){
        const { error } = signinValidation(req.body);
        if (error) return res.status(400).json(error.message);

        const user = await User.findOne({ email: req.body.email });
        if (!user) return res.status(400).json('Email or Password is wrong');
       
        if(user){
            console.log(user.password)
            console.log(req.body.password);
            const correctPassword = await bcrypt.compare(req.body.password, user.password);
            if (!correctPassword) return res.status(400).json('Invalid Password');
        }
        

        const token = generate({ _id: user._id });
        res.header('x-access', token).json(token);
    }

    public async signUp(req: Request, res: Response){
        const { error } = signupValidation(req.body);
        if (error) return res.status(400).json(error.message);

        const emailExists = await User.findOne({ email: req.body.email });
        if (emailExists) return res.status(400).json('Email already exists');

        try {
            const newUser: IUser = new User({
                username: req.body.username,
                email: req.body.email,
                password: req.body.password
            });
            newUser.password = await newUser.encryptPassword(newUser.password);
            const savedUser = await newUser.save();
    
            const token = generate({ _id: savedUser._id })
            res.header('x-access', token).json('User created');

        } catch (e) {
            res.status(400).json(e);
            console.log(e)
        }
    }
}

export default UserController;