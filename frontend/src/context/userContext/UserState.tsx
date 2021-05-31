import React, {useReducer} from 'react';
import axios from 'axios';
import userContext from './UserContext';
import UserReducer from './UserReducer';

type Props = {
    children: JSX.Element,
};

const UserState = (props: Props) => {
    const initialState = {
        authenticated: false,
        apiMessage: ''
    }

    const [state, dispatch] = useReducer(UserReducer, initialState);

    const login = async (data:object) => {
        try {
            const response = await axios.post("http://localhost:4000/user/signin", data);
            dispatch({
                type: 'LOGIN_USER',
                payload: response.data
            }) 
        } catch (error) {
            dispatch({
                type: 'LOGIN_USER_ERROR',
                payload: error.response.data
            }) 
        }
       
    }

    const register = async (data:object) => {
        try {
            const response = await axios.post("http://localhost:4000/user/signup", data);
            dispatch({
                type: 'LOGIN_USER',
                payload: response.data
            }) 
        } catch (error) {
            dispatch({
                type: 'LOGIN_USER_ERROR',
                payload: error.response.data
            }) 
        }
       
    }

    const authFn = () => {
        if(localStorage.getItem('userToken')){
            dispatch({
                type: 'AUTH'
            }) 
        }
    }

    const close = () => {
        dispatch({
            type: 'CLOSE'
        }) 
    }

    const cleanMessage = () => {
        dispatch({
            type: 'CLEAN_MESSAGE'
        }) 
    }


    return (
        <userContext.Provider
            value={{
                authenticated: state.authenticated,
                apiMessage: state.apiMessage,
                login,
                register,
                authFn,
                close,
                cleanMessage
            }}
        >
            {props.children}
        </userContext.Provider>
    )
}

export default UserState;