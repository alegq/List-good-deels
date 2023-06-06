import { ListAction, ListActionTypes, listState } from "@/types/list";

const initalState: listState = {
  text: ["Взять на работу молодого сотрудника", "dsgfdfds"],
  done: false,
};

export const listReduser = (
  state = initalState,
  action: ListAction
): listState => {
  switch (action.type) {
    case ListActionTypes.ADD:
      return { ...state, text: [...state.text, action.payload] };
    case ListActionTypes.DELETE: {
      state.text.splice(action.payload - 1, 1);
      return { ...state, text: state.text };
    }
    case ListActionTypes.CHECK:
      return { ...state, done: true };
    default:
      return state;
  }
};
