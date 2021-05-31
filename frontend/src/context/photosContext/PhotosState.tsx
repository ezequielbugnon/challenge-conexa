import React, {useReducer} from 'react';
import axios from 'axios';
import photosContext from './PhotosContext';
import photosReducer from './PhotosReducer';

type Props = {
    children: JSX.Element,
};

const PhotosState = (props: Props) => {
    const initialState = {
        photos: []
    }

    const [state, dispatch] = useReducer(photosReducer, initialState);

    const requestPhoto = async (number: number) => {
        number.toString()
        const response = await axios.get(`http://localhost:4000/photos/${number}/10`);
        try {
            dispatch({
                type: 'ACTIVE',
                payload: response.data
            })
        } catch (error) {
            console.log(error)
        }
       
    }

    return (
        <photosContext.Provider
            value={{
                photos:state.photos,
                requestPhoto
            }}
        >
            {props.children}
        </photosContext.Provider>
    )
}

export default PhotosState;