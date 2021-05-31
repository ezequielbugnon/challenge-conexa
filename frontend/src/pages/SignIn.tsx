import React, {useEffect, useContext} from 'react';
import * as SC from './styles';
import Form from '../components/form/Form';
import UserContext from '../context/userContext/UserContext';
import { useHistory } from "react-router-dom";

const SignIn = () => {
    const userContext = useContext(UserContext);
    const { authenticated } = userContext;
    let history = useHistory();

    useEffect(() => {
        if(authenticated){
            history.push("/home")
        }
    }, [authenticated, history])
    
    return (
        <SC.Container end={true}>
            <SC.BoxGreen ></SC.BoxGreen>
            <Form 
                right={true}
            ></Form>
        </SC.Container>
    );
}

export default SignIn;