import { Posts,Users,Todos,Comments ,Adds} from "../actions";
const initialState = {
    arr : [],
    post : [],
    todo : [],
    comment : [],
    add : {name:'',username:'',email:''},
    record:[]
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
       
    
        default:
            return state;
    }
}