"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_shema_1 = __importDefault(require("../database/schema/user.shema"));
const jwt_1 = require("../jwt/jwt");
const joi_1 = require("../validate/joi");
class UserController {
    profile(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_shema_1.default.findById(req.userId, { password: 0 });
            if (!user) {
                return res.status(404).json('No User found');
            }
            res.json(user);
        });
    }
    signIn(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { error } = joi_1.signinValidation(req.body);
            if (error)
                return res.status(400).json(error.message);
            const user = yield user_shema_1.default.findOne({ email: req.body.email });
            if (!user)
                return res.status(400).json('Email or Password is wrong');
            if (user) {
                const correctPassword = yield bcrypt_1.default.compare(req.body.password, user.password);
                if (!correctPassword)
                    return res.status(400).json('Email or Password is wrong');
            }
            const token = jwt_1.generate({ _id: user._id });
            res.header('x-access', token).json(token);
        });
    }
    signUp(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { error } = joi_1.signupValidation(req.body);
            if (error)
                return res.status(400).json(error.message);
            const emailExists = yield user_shema_1.default.findOne({ email: req.body.email });
            if (emailExists)
                return res.status(400).json('Email already exists');
            try {
                const newUser = new user_shema_1.default({
                    username: req.body.username,
                    email: req.body.email,
                    password: req.body.password
                });
                newUser.password = yield newUser.encryptPassword(newUser.password);
                const savedUser = yield newUser.save();
                const token = jwt_1.generate({ _id: savedUser._id });
                res.header('x-access', token).json(token);
            }
            catch (e) {
                res.status(400).json(e);
                console.log(e);
            }
        });
    }
}
exports.default = UserController;
//# sourceMappingURL=user.controller.js.map