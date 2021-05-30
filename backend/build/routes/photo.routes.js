"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const photo_controller_1 = __importDefault(require("../controllers/photo.controller"));
class PhotoRouter {
    constructor() {
        this.router = express_1.Router();
        this.photoController = new photo_controller_1.default();
        this.routes();
    }
    routes() {
        this.router.get('/photos/:start/:limit', this.photoController.getPhotos);
    }
    start() {
        return this.router;
    }
}
const photoRoutes = new PhotoRouter();
exports.default = photoRoutes.start();
//# sourceMappingURL=photo.routes.js.map