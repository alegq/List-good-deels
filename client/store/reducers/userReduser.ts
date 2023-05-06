import {UserAction, UserActionTypes, UserState} from "@/types/user";

const initalState : UserState = {
    allUsers:{
        _id: '',
        teg: '',
        name: '',
        login: '',
        password:'',
        list: [],
        friends: [],
    },
    user: {
        _id: '',
        teg: '',
        name: '',
        login: '',
        password:'',
        list: [],
        friends: [],
    },
    error: '',
    mode: false,

}

export const userReduser = (state=initalState, action:UserAction) : UserState => {
    switch (action.type){
        case UserActionTypes.FETCH_USER_ERROR:
            return {...state, error: action.payload}
        case UserActionTypes.FETCH_USER:
            return {...state,  allUsers: action.payload}
        case UserActionTypes.ADD_USER:{
            console.log(999999)
            return {...state, user: action.payload}
        }

        case UserActionTypes.ADD_FETCH_USER:
            return state
        case UserActionTypes.CHANGE_MODE:
            return {...state,  mode:action.payload}
        default:
            return state
    }

}