import {Dispatch} from "react";
import {UserAction, UserActionTypes} from "@/types/user";
import axios from "axios";


export const fetchTracks = () => {
  return async (dispatch:Dispatch<UserAction>) =>{
      try {
          const response = await axios.get('http://localhost:5000/client')
          dispatch({
              type: UserActionTypes.FETCH_USER,
              payload: response.data
          })
      }catch (e){
          dispatch({
              type: UserActionTypes.FETCH_USER_ERROR,
              payload:'Произошла ошибка'})
      }
  }
}