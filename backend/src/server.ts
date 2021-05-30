import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import connexion from './database/db';

import userRoutes from './routes/user.routes';
import postRoutes from './routes/post.routes';
import photoRoutes from './routes/photo.routes';

class Server {
    private app: express.Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    private config():void { 
        this.app.set('port', process.env.PORT || 4000);

        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
        this.app.use(cors());
    }

    private routes():void{
        this.app.use('/', userRoutes);
        this.app.use('/', postRoutes);
        this.app.use('/', photoRoutes);
    }

    public start():void {
        this.app.listen(this.app.get('port'), 
        () => console.log('Server is listenning on port', this.app.get('port')))
    }

}

const server = new Server();
server.start();
connexion();