import React, {useContext} from 'react';
import Content from '../components/home/Content';
import UserContext from '../context/userContext/UserContext';

const Home = () => {
    const userContext = useContext(UserContext);
    const { close } = userContext;
    
    return (
        <Content fnClose={close}/>
    );
}

export default Home;

