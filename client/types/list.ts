export interface listState {
  text: string[];
  done: boolean;
}

export enum ListActionTypes {
  ADD = "ADD",
  DELETE = "DELETE",
  CHECK = "CHECK",
}

interface AddCaseAction {
  type: ListActionTypes.ADD;
  payload: string;
}

interface DeleteCaseAction {
  type: ListActionTypes.DELETE;
  payload: number;
}

interface CheckCaseAction {
  type: ListActionTypes.CHECK;
}

export type ListAction = AddCaseAction | DeleteCaseAction | CheckCaseAction;
