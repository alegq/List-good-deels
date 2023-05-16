//компанент для регистрации
import React, {useEffect, useState} from 'react';
import {useInput} from "@/hooks/useInput";
import axios from "axios";
import {Button, TextField} from "@mui/material";
import {useTypedSelector} from "@/hooks/useTypedSelector";
import {useRouter} from "next/router";
import {useActions} from "@/hooks/useActions";

const SignUpForm = () => {

    const router = useRouter() //инициализируем роутер

    const {user} = useTypedSelector(state => state.user)
    const {addUser,changeMode} = useActions()

    const logInp = useInput('')
    const passWordInp = useInput('')
    const nameInp = useInput('')
    const tegInp = useInput('')

    useEffect(
        ()=>{
            if(user.login == 'login'){
                console.log(user)
                router.push('/login')
            }
        },
        [user]
    );

    function AddUser(){
        axios.post('http://localhost:3000/client',
            {
                'login':logInp.value,
                'password':passWordInp.value,
                'name':nameInp.value,
                'teg':tegInp.value,
                'list':[],
                'friends':[],}
        ).then(response => {
            addUser(response.data);
            changeMode(true)
            window.localStorage.setItem("user",JSON.stringify({
                '_id':response.data._id,
                'login': response.data.login,
                'password': response.data.password
            }))
            router.push('/');
        });

    }
    console.log(user)

    return (
        <div>
            <h3>Регистрация</h3>
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
            <TextField
                {...nameInp}
                style={{marginTop: 10}}
                label={"Имя"}
            />
            <br/>
            <TextField
                {...tegInp}
                style={{marginTop: 10}}
                label={"Тег"}
            />
            <br/>

            <Button onClick={AddUser}>Зарегистрироваться</Button>

        </div>
    );
};

export default SignUpForm;



