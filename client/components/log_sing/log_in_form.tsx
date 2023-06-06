//компонет авторизации
import React, { useEffect, useState } from "react";
import { useInput } from "@/hooks/useInput";
import { Button, TextField } from "@mui/material";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { useRouter } from "next/router";
import { useActions } from "@/hooks/useActions";
import { IUser } from "@/types/user";
import axios from "axios";

const LogInForm = () => {
  const router = useRouter(); //инициализируем роутер

  const { user } = useTypedSelector((state) => state.user);
  const { addUser, changeMode } = useActions();

  const [checklogPass, setChecklogPass] = useState(false); // при true отоброжаем сообщение о неправильных данных авторизации

  useEffect(() => {
    if (user.login == "login") {
      router.push("/login");
    }
  }, [user]);

  const logInp = useInput("");
  const passWordInp = useInput("");

  let userDate: IUser;

  function AddUser() {
    axios
      .post("http://localhost:3000/client/login", {
        login: logInp.value,
        password: passWordInp.value,
      })
      .then((response) => {
        let userData = response.data[0];
        console.log(userData); // data[0], потому что ответ является массивом
        if (userData) {
          addUser(userData);
          changeMode(true);
          window.localStorage.setItem(
            "user",
            JSON.stringify({
              _id: userData._id,
              login: userData.login,
              password: userData.password,
            })
          );
          router.push("/");
        }
      });
    setChecklogPass(true);
  }

  return (
    <div>
      <h3>Вход</h3>
      <TextField {...logInp} style={{ marginTop: 10 }} label={"Логин"} />
      <br />
      <TextField {...passWordInp} style={{ marginTop: 10 }} label={"Пароль"} />
      <br />

      <Button onClick={AddUser}>ВОЙТИ</Button>
      {checklogPass && (
        <h6 style={{ color: "red" }}>Логин или пароль введен не верно</h6>
      )}
    </div>
  );
};

export default LogInForm;
