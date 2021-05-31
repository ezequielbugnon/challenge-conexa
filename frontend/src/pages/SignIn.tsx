import React from 'react';
import * as SC from './styles';
import Form from '../components/form/Form';

const SignIn= () => {
    return (
        <SC.Container >
            <SC.BoxGreen ></SC.BoxGreen>
            <Form username></Form>
        </SC.Container>
    );
}

export default SignIn;

