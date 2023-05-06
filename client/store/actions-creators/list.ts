import {ListAction, ListActionTypes} from "@/types/list";

export const addCase = (payload:string): ListAction => {
    return {type: ListActionTypes.ADD, payload}
}
export const deleteCase = (payload:number): ListAction => {
    return {type: ListActionTypes.DELETE,payload}
}
export const checkCase = (): ListAction => {
    return {type: ListActionTypes.CHECK}
}
