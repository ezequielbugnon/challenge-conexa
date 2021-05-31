import { createContext } from 'react';

export interface UserContextProps {
    authenticated: boolean,
    apiMessage: '',
    login: (datd:object) => void;
    register: (datd:object) => void;
    authFn:() => void;
    close: () => void;
    cleanMessage:() => void;
}


const userContext = createContext({} as UserContextProps);

export default userContext;