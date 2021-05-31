import { useState, useContext } from 'react'

import {IForm} from '../interfaces/form';
import UserContext from '../context/userContext/UserContext';

const useForm = ( name?: boolean) => {
    const userContext = useContext(UserContext);
    const { login, register } = userContext;
 
    const [useForm, setUseForm] =  useState<IForm>({
        username: '',
        email: '',
        password: ''
    })

    const [messageState, setMessageState] = useState<String>('');

    const {username, email, password} = useForm;

    const handleChange = (event: any) => {
        setUseForm({
            ...useForm,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (!validationEmail(email)){
            return setMessageState('Email not valid')
        }

        if(password.length < 6){
            return setMessageState('Password must be greater than 6 characters')
        }

        if(name){
            if(username!.length < 4){
                return setMessageState('Username must be greater than 6 characters')
            }
            register({username, email, password})
        }else{
            login({email, password})
           
        }
        setMessageState('');
       
        
    }

    const validationEmail = (email:string):boolean => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(email) return re.test(email)

        return false
    }



    return {
        messageState,
        username,
        email,
        password,
        handleChange,
        handleSubmit
    }
}

export default useForm;