import React from 'react';
import * as SC from './styled'

interface Props{
    username?:boolean
    right?:boolean
}


const Form = ({username, right}: Props) => {
    return (
        <SC.ContainerForm right={right}>
        <form>
            <div>
                <h1>Welcome</h1>
            </div>
            {username &&
             <div>
                <input 
                    type="text"
                    placeholder= "username"
                 />
            </div>
            }
            <div>
                <input 
                    type="email"
                    placeholder= "email"
                 />
            </div>
            <div>
                <input 
                    type="password"
                    placeholder="password"
                />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
        </SC.ContainerForm>
    );
}

export default Form;