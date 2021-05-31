import React from 'react';
import * as SC from './styles';
import Form from '../components/form/Form';

const SignUp = () => {
    return (
        <SC.Container end={true}>
            <SC.BoxGreen ></SC.BoxGreen>
            <Form 
                right={true}
            ></Form>
        </SC.Container>
    );
}

export default SignUp;