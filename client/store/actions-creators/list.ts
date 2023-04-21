import {ListAction, ListActionTypes} from "@/types/list";

export const addCase = (payload:string): ListAction => {
    return {type: ListActionTypes.ADD, payload}
}
export const deleteCase = (): ListAction => {
    return {type: ListActionTypes.DELETE}
}
export const checkCase = (): ListAction => {
    return {type: ListActionTypes.CHECK}
}
