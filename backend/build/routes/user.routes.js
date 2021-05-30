"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const jwt_1 = require("../jwt/jwt");
class UserRouter {
    constructor() {
        this.router = express_1.Router();
        this.userController = new user_controller_1.default();
        this.routes();
    }
    routes() {
        this.router.get('/user/profile', jwt_1.verify, this.userController.profile);
        this.router.post('/user/signin', this.userController.signIn);
        this.router.post('/user/signup', this.userController.signUp);
    }
    start() {
        return this.router;
    }
}
const userRouter = new UserRouter();
exports.default = userRouter.start();
//# sourceMappingURL=user.routes.js.map