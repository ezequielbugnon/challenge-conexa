import { Request, Response } from 'express';
import axios from 'axios';

class PhotoController{
    public async getPhotos(req: Request, res: Response):Promise<any> {
        const {start, limit} = req.params;
        try {
          const response = await axios(`https://jsonplaceholder.typicode.com/photos?_start=${start}0&_limit=${limit}`);
          res.status(200).json(response.data);
        } catch (error) {
            console.log(error);
            res.status(404).json('Photos not found')
        }
    }
}

export default PhotoController;