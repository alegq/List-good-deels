import React, {useEffect, useState} from 'react';
import {useInput} from "@/hooks/useInput";
import axios from "axios";
import {Button, TextField} from "@mui/material";
import {addUser, fetchUser} from "@/store/actions-creators/user";
import {useTypedSelector} from "@/hooks/useTypedSelector";
import {router} from "next/client";
import {useRouter} from "next/router";
import {useActions} from "@/hooks/useActions";
import {IUser} from "@/types/user";

const LogInForm = () => {

    const router = useRouter() //инициализируем роутер

    const [log, setLog] = useState('');
    const [passWord, setPassWord] = useState('');

    const {allUsers,user, error} = useTypedSelector(state => state.user)
    const {addUser,changeMode} = useActions()

    useEffect(
        ()=>{
            if(user.login == 'login'){
                console.log(user)
                router.push('/login')
            }
        },
        [user]
    );

    const logInp = useInput('')
    const passWordInp = useInput('')

    let userDate:IUser;

    console.log(allUsers)

    function AddUser(){
        //console.log(allUsers[55].password)
        console.log(allUsers)
        allUsers.forEach((element)=>{
           if (element.login == logInp.value && element.password == passWordInp.value){
               console.log('успешный вход')
               userDate = {
                   '_id':element._id,
                   'login': element.login,
                   'password': element.password,
                   'name': element.name,
                   'teg': element.teg,
                   'list': element.list,
                   'friends': element.friends
               }
               addUser(userDate)
               changeMode(true)

               window.localStorage.setItem("user",JSON.stringify({
                   '_id':element._id,
                   'login': element.login,
                   'password': element.password
               }))

               router.push('/');
               return
           }
        })
    }

    const next = () => {
      console.log(user)
    }

    return (
        <div>
            <h3>Вход</h3>
            <TextField
                {...logInp}
                style={{marginTop: 10}}
                label={"Логин"}
            />
            <br/>
            <TextField
                {...passWordInp}
                style={{marginTop: 10}}
                label={"Пароль"}
            />
            <br/>

            <Button onClick={AddUser}>ВОЙТИ</Button>

        </div>
    );
};

export default LogInForm;



