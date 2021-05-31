type Action = 
    | { type: 'LOGIN_USER', payload: string }
    | { type: 'LOGIN_USER_ERROR', payload: string}
    | { type: 'REGISTER_USER', payload: string }
    | { type: 'REGISTER_USER_ERROR', payload: string}
    | { type: 'AUTH'}
    | { type: 'CLOSE'}
    | { type: 'CLEAN_MESSAGE'}


const UserReduder = (state: any, action: Action) => {
    switch(action.type){
        case 'LOGIN_USER':
        case 'REGISTER_USER':
            localStorage.setItem('userToken', action.payload);
            return {
                ...state,
                authenticated: true
            }
        case 'LOGIN_USER_ERROR':
        case 'REGISTER_USER_ERROR':
            return {
                ...state,
                authenticated: false,
                apiMessage: action.payload
            }
        case 'AUTH':
            return{
                ...state,
                authenticated: true 
            }
        case 'CLOSE':
            localStorage.removeItem('userToken');
            return{
                ...state,
                authenticated: false 
            }
        case 'CLEAN_MESSAGE':
            return{
                ...state,
                apiMessage: ''
            }
        default:
            return state;
    }
}

export default UserReduder;