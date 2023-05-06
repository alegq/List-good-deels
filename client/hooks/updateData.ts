import {useState} from "react";
import axios from "axios";
import {useTypedSelector} from "@/hooks/useTypedSelector";
import {useActions} from "@/hooks/useActions";
import {addUser} from "@/store/actions-creators/user";
import {IUser} from "@/types/user";



export  const updateData = (userId,list?:string[], frieds?:string[]) => {

    //const url_id = 'http://localhost:3000/client/' + userId;
    const {addUser,changeMode} = useActions()
    addUser(
         {
            '_id':'',
            'login': '',
            'password': '',
            'name': '',
            'teg': '',
            'list': [],
            'friends': []
        }
    )
    changeMode(false)
    //let userDate:IUser;

    // try {
    //     axios.put(url_id,{
    //             "case":['32132jhgjg13',['342423']],
    //             "friend": ['644e1bd797c8dd02c2e766b6']
    //         }
    //     ).then(response => {
    //            addUser(response.data)
    //         }
    //     );
    // }catch (e){
    //     console.log(e)
    // }
    //return{userDate}
}