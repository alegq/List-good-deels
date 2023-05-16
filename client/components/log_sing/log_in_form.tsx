//компонет авторизации
import React, {useEffect} from 'react';
import {useInput} from "@/hooks/useInput";
import {Button, TextField} from "@mui/material";
import {useTypedSelector} from "@/hooks/useTypedSelector";
import {useRouter} from "next/router";
import {useActions} from "@/hooks/useActions";
import {IUser} from "@/types/user";

const LogInForm = () => {

    const router = useRouter() //инициализируем роутер

    const {allUsers,user} = useTypedSelector(state => state.user)
    const {addUser,changeMode} = useActions()

    useEffect(
        ()=>{
            if(user.login == 'login'){
                router.push('/login')
            }
        },
        [user]
    );

    const logInp = useInput('')
    const passWordInp = useInput('')

    let userDate:IUser;

    function AddUser(){
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


