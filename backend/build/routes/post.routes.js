"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const post_controller_1 = __importDefault(require("../controllers/post.controller"));
class PostRouter {
    constructor() {
        this.router = express_1.Router();
        this.postController = new post_controller_1.default();
        this.routes();
    }
    routes() {
        this.router.get('/posts', this.postController.getPosts);
    }
    start() {
        return this.router;
    }
}
const postRoutes = new PostRouter();
exports.default = postRoutes.start();
//# sourceMappingURL=post.routes.js.map