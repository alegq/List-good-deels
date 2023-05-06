export interface IFriend {
    _id: string;
    teg: string;
    name: string;
    list: string[];
}

export interface IUser {
    _id: string;
    teg: string;
    name: string;
    login: string;
    password:string
    list: string[];
    friends: string[]
}

export interface UserState {
    allUsers: IUser;
    user: IUser;
    error: string;
    mode: boolean;
}

export enum UserActionTypes {
    ADD_USER = 'ADD_USER',
    ADD_FETCH_USER = 'ADD_FETCH_USER',
    FETCH_USER = 'FETCH_USER',
    FETCH_USER_ERROR = 'FETCH_USER_ERROR',
    CHANGE_MODE = 'CHANGE_MODE',
}

interface AddAction {
    type: UserActionTypes.ADD_FETCH_USER

}

interface AddFetchAction {
    type: UserActionTypes.ADD_USER
    payload: IUser
}


interface FetchUserAction {
    type: UserActionTypes.FETCH_USER;
    payload: IUser
}

interface FetchUserErrorAction {
    type: UserActionTypes.FETCH_USER_ERROR;
    payload: string
}

interface ChangeModeAction {
    type: UserActionTypes.CHANGE_MODE;
    payload: boolean
}

export type UserAction = FetchUserAction | FetchUserErrorAction | AddAction | AddFetchAction | ChangeModeAction