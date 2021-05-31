import React, {useEffect, useContext} from 'react';
import * as SC from './styled'
import { Link } from 'react-router-dom';
import useForm from '../../hocks/useForm';
import UserContext from '../../context/userContext/UserContext';


interface Props{
    name?:boolean
    right?:boolean
}


const Form = ({name, right}: Props) => {
    const userContext = useContext(UserContext);
    const {apiMessage, cleanMessage} = userContext;

    useEffect(() => {
        cleanMessage();
    }, [])

    const { 
        messageState,
        username,
        email,
        password,
        handleChange,
        handleSubmit 
    } = useForm(name)

    return (
        <SC.ContainerForm right={right}>
        <form>
            <div>
                <h1>Welcome</h1>
                {messageState && <p>{messageState}</p>}
                {apiMessage && <p>{apiMessage}</p>}
            </div>
            {name &&
             <div>
                <input 
                    type="text"
                    placeholder= "username"
                    onChange={e => handleChange(e)}
                    value={username}
                    name="username"
                 />
            </div>
            }
            <div>
                <input 
                    type="email"
                    placeholder= "email"
                    onChange={e => handleChange(e)}
                    value={email}
                    name="email"
                 />
            </div>
            <div>
                <input 
                    type="password"
                    placeholder="password"
                    onChange={e => handleChange(e)}
                    value={password}
                    name="password"
                />
            </div>
            <div>
                <button 
                    onClick={handleSubmit}
                >Send</button>
            </div>
            { name ?
                <Link to="/">Login</Link>:
                <Link to="/signup">Register</Link>
            }
            
        </form>
        </SC.ContainerForm>
    );
}

export default Form;