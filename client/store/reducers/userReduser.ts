import {UserAction, UserActionTypes, UserState} from "@/types/user";

const initalState : UserState = {
    user: {
        _id: '',
        teg: '',
        name: '',
        login: '',
        password:'',
        list: [''],
        friends: [{
            _id:'',
            teg:'',
            name:'',
            list:[''],
        }],
    },
    error: ''

}

export const userReduser = (state=initalState, action:UserAction) : UserState => {
    switch (action.type){
        case UserActionTypes.FETCH_USER_ERROR:
            return {...state, error: action.payload}
        case UserActionTypes.FETCH_USER:
            return {error: '', user: action.payload}
        default:
            return state
    }

}