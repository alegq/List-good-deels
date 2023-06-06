import { Dispatch } from "react";
import { IUser, UserAction, UserActionTypes } from "@/types/user";
import axios from "axios";
import { useTypedSelector } from "@/hooks/useTypedSelector";

export const fetchUser = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      const response = await axios.get("http://localhost:3000/client");
      dispatch({
        type: UserActionTypes.FETCH_USER,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: UserActionTypes.FETCH_USER_ERROR,
        payload: "Произошла ошибка",
      });
    }
  };
};

export const addfetchUser = (name: string, password: string) => {
  return async (dispatch: Dispatch<UserAction>) => {
    const { user, error } = useTypedSelector((state) => state.user);
    try {
      const response = await axios.post("http://localhost:3000/client", {
        name: user.login,
        age: password,
      });
      dispatch({
        type: UserActionTypes.ADD_FETCH_USER,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: UserActionTypes.FETCH_USER_ERROR,
        payload: "Произошла ошибка",
      });
    }
  };
};

export const addUser = (payload: IUser): UserAction => {
  return { type: UserActionTypes.ADD_USER, payload };
};

export const changeMode = (payload: boolean): UserAction => {
  return { type: UserActionTypes.CHANGE_MODE, payload };
};
