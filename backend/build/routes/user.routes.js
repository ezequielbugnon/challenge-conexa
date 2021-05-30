"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
class UserRouter {
    constructor() {
        this.router = express_1.Router();
        this.userController = new user_controller_1.default();
        this.routes();
    }
    routes() {
        this.router.get('/user', this.userController.getUser);
    }
    start() {
        return this.router;
    }
}
const userRouter = new UserRouter();
exports.default = userRouter.start();
