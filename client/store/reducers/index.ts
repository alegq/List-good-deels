import {combineReducers} from "redux";
import {listReduser} from "@/store/reducers/listReduser";
import {HYDRATE} from "next-redux-wrapper";
import {userReduser} from "@/store/reducers/userReduser";


const rootReducer = combineReducers ({
    list: listReduser,
    user: userReduser
})

export const reducer = (state, action) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state, // use previous state
            ...action.payload, // apply delta from hydration
        };
        if (state.count) nextState.count = state.count; // preserve count value on client side navigation
        return nextState;
    } else {
        return rootReducer(state, action);
    }
};


export type RootState = ReturnType<typeof rootReducer>