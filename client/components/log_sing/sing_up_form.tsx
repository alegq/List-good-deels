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


    const {allUsers, user} = useTypedSelector(state => state.user)
    const {addUser,changeMode} = useActions()

    //константы содержащие вводимы пользователем данные в input
    const logInp = useInput('')
    const passWordInp = useInput('')
    const nameInp = useInput('')
    const tegInp = useInput('')

    //хранение результатов валидации данных и выводимого сообщение в случае ошибки
    const [statelogInp, setStatelogInp] =  useState({'mod':true, 'text':''});
    const [statePassword, setStatePassword] = useState({'mod':true, 'text':''});
    const [stateName, setStateName] = useState({'mod':true, 'text':''});
    const [stateTeg, setStateTeg] = useState({'mod':true, 'text':''});

    //состояние для useEffect, которое сообщает о том что валидация была запущена и завершена и необходимо проверить на наличие ошибок
    const [checkErrorValid, setCheckErrorValid] = useState(false);

    useEffect(
        ()=>{
            //проверка на наличие ошибок при валидации и запуск создание аккаунта
            if (checkErrorValid && statelogInp.mod && stateName.mod && statePassword.mod && stateTeg.mod){
                AddUser();
            }
            setCheckErrorValid(false)
        },
        [checkErrorValid]
    );

    function ValidForm(){
        //валидация логина
        setStatelogInp({'mod':true, 'text':''}) //стираем предупреждение, если оно есть
        if (logInp.value===''){
            setStatelogInp({'mod':false, 'text':'Введите логин'})
        }
        else {
          allUsers.forEach((element)=>{
             if(logInp.value==element.login){
                 setStatelogInp({'mod':false, 'text':'Акаунт с таким логином уже существует'})
             }
          })
        }
        //валидация пароля
        setStatePassword({'mod':true, 'text':''}) //стираем предупреждение, если оно есть
        if (passWordInp.value===''){
            setStatePassword({'mod':false, 'text':'Введите пароль'})
        }
        //валидация имя
        setStateName({'mod':true, 'text':''}) //стираем предупреждение, если оно есть
        if (nameInp.value===''){
            setStateName({'mod':false, 'text':'Введите имя'})
        }
        //валидация тега
        setStateTeg({'mod':true, 'text':''}) //стираем предупреждение, если оно есть
        if (tegInp.value===''){
            setStateTeg({'mod':false, 'text':'Введите тег'})
        }
        else {
            allUsers.forEach((element)=>{
                if(tegInp.value==element.teg){
                    setStateTeg({'mod':false, 'text':'Акаунт с таким тегом уже существует'})
                }
            })
        }

        setCheckErrorValid(true)
    }

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

    return (
        <div>
            <h3>Регистрация</h3>
            <TextField
                {...logInp}
                style={{marginTop: 10}}
                label={"Логин"}
            />
            {
                (!statelogInp.mod)&&
                <span style={{color: 'red'}}>{statelogInp.text}</span>
            }
            <br/>
            <TextField
                {...passWordInp}
                style={{marginTop: 10}}
                label={"Пароль"}
            />
            {
                (!statePassword.mod)&&
                <span style={{color: 'red'}}>{statePassword.text}</span>
            }
            <br/>
            <TextField
                {...nameInp}
                style={{marginTop: 10}}
                label={"Имя"}
            />
            {
                (!stateName.mod)&&
                <span style={{color: 'red'}}>{stateName.text}</span>
            }
            <br/>
            <TextField
                {...tegInp}
                style={{marginTop: 10}}
                label={"Тег"}
            />
            {
                (!stateTeg.mod)&&
                <span style={{color: 'red'}}>{stateTeg.text}</span>
            }
            <br/>

            <Button onClick={ValidForm}>Зарегистрироваться</Button>

        </div>
    );
};

export default SignUpForm;



