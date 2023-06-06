//компонет для создания меню страниц
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useRouter } from "next/router";
import { Button } from "@mui/material";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { useActions } from "@/hooks/useActions";
import { useEffect } from "react";
import { IUser } from "@/types/user";
import axios from "axios";

const drawerWidth = 240;

const menuItems = [
  { text: "Главная", href: "/" },
  { text: "Мой список", href: "/goodList" },
  { text: "Друзья", href: "/friends" },
];

export default function Navbar() {
  const router = useRouter();

  const { mode, user } = useTypedSelector((state) => state.user); //получаем состояние приложения (0-базовое,1-вход,2-регистрация,3-зашли/зарегестрировались)
  const { changeMode, addUser } = useActions(); //достаем функцию для изменения store

  useEffect(() => {
    if (!user._id && JSON.parse(window.localStorage.getItem("user"))) {
      const hashUser: string | null = JSON.parse(
        window.localStorage.getItem("user") || ""
      );
      let userDate: IUser;

      try {
        const response = axios
          .get("http://localhost:3000/client/" + hashUser._id)
          .then((response) => {
            if (
              response.data.login == hashUser.login &&
              response.data.password == hashUser.password
            ) {
              userDate = {
                _id: response.data._id,
                login: response.data.login,
                password: response.data.password,
                name: response.data.name,
                teg: response.data.teg,
                list: response.data.list,
                friends: response.data.friends,
              };
              addUser(userDate);
              changeMode(true);
            }
          });
      } catch (e) {
        console.log(e);
      }
    }
  }, []);

  //функиции обработчика события onClick для кнопок 'LOG IN'/'SING UP'
  const logIn = () => {
    router.push("/login/log_in");
  };
  const sing = () => {
    router.push("/login/sing_up");
  };
  const logOut = () => {
    addUser({
      _id: "",
      login: "",
      password: "",
      name: "",
      teg: "",
      list: [],
      friends: [],
    });
    changeMode(false);
    window.localStorage.removeItem("user");
    router.push("/");
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            List of good deeds
          </Typography>
          {!mode && (
            <Button
              style={{ marginLeft: "auto", marginRight: "1%" }}
              color="secondary"
              variant="contained"
              onClick={logIn}
            >
              Log In
            </Button>
          )}
          {!mode && (
            <Button color="secondary" variant="contained" onClick={sing}>
              Sign up
            </Button>
          )}
          {mode && (
            <Button
              style={{ marginLeft: "auto" }}
              color="secondary"
              variant="contained"
              onClick={logOut}
            >
              Выйти
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {menuItems.map(({ text, href }, index) => (
            <ListItem
              key={text}
              disablePadding
              onClick={() => router.push(href)}
            >
              <ListItemButton disabled={!mode}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      ></Box>
    </Box>
  );
}
