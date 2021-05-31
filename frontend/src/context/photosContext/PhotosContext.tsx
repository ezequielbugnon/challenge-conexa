import { createContext } from 'react';
import {IPhoto} from '../../interfaces/responses'

export interface PhotoContextProps {
    photos: Array<IPhoto>,
    requestPhoto: (number:number) => void;
}


const photosContext = createContext({} as PhotoContextProps);

export default photosContext;