import React, {useContext, useEffect} from 'react';
import { Route , Redirect} from 'react-router-dom'
import UserContext from '../../context/userContext/UserContext';


const PrivateRoute = ({component: Component, ...props}: any) => {
    const userContext = useContext(UserContext);
    const { authenticated, authFn} = userContext;
    
    useEffect(() => {
        authFn();
    },[])

    return (
        <Route {...props} render={props => !authenticated ? (
            <Redirect to="/"/>
        ):(
            <Component {...props} />
        )} />
    )
}

export default PrivateRoute;