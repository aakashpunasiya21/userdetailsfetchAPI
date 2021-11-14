import { Posts,Users,Todos,Comments ,ADD_USER, GetName, getName, getUser, getEmail} from "../actions";
const initialState = {
    arr : [],
    post : [],
    todo : [],
    comment : [],
    name :{},
    username :{},
    email : {},
    record:[],
};

export default function user_reducer(state = initialState,action){
    switch (action.type) {
        case Users:
            return{
                ...state,
                arr : action.payload,
            }
        case Posts :
            return{
                ...state,
                post : action.payload,
            }
        case Todos :
            return{
                ...state,
                todo : action.payload,
            }
        case Comments :
            return{
                ...state,
                comment : action.payload,
            }
       
        case getName :
            return{
                ...state,
                name :action.payload,
            }
            case getUser :
                return{
                    ...state,
                    username :action.payload,
                }
                case getEmail :
                    return{
                        ...state,
                        email :action.payload,
                    }
                   
        default:
            return state;
    }
}