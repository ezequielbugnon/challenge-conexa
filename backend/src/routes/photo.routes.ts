import { Router } from 'express';
import PhotoController from '../controllers/photo.controller';

class PhotoRouter{
    private router: Router;
    private photoController: PhotoController;

    constructor() {
        this.router = Router();
        this.photoController = new PhotoController();
        this.routes();
    }

    private routes():void {
        this.router.get('/photos/:start/:limit', this.photoController.getPhotos);
    }

    public start(): Router {
        return this.router;
    }
}

const photoRoutes = new PhotoRouter();

export default photoRoutes.start();