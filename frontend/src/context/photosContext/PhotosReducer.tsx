import { IPhoto } from "../../interfaces/responses";

type Action = 
    | { type: 'ACTIVE', payload: Array<IPhoto> }
    | { type: 'ERROR'}


const UserReduder = (state: any, action: Action) => {
    switch(action.type){
        case 'ACTIVE':
            return{
                ...state,
                photos: action.payload 
            }
        case 'ERROR':
            return{
                ...state,
                photos: []
            }
        default:
            return state;
    }
}

export default UserReduder;