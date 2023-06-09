// страница списка друзей
import React, { useEffect, useState } from "react";
import MainLayouts from "@/layouts/MainLayouts";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { NextThunkDispatch, wrapper } from "../../store";
import { addUser, fetchUser } from "../../store/actions-creators/user";
import { useActions } from "@/hooks/useActions";
import axios from "axios";
import Friend from "@/components/Friend";
import { useInput } from "@/hooks/useInput";
import { Box, Button, Card, Grid, TextField } from "@mui/material";

interface IFriend {
  _id: string;
  name: string;
  list: string[];
}

const Index = () => {
  const { user, allUsers } = useTypedSelector((state) => state.user);

  const [friendsId, setFriendsId] = useState<IFriend[]>([]);
  const { addUser } = useActions();

  const friendInp = useInput("");

  const url = "http://localhost:3000/client/";
  const url_friend_teg = url + "friend/";

  useEffect(() => {
    getUser();
  }, [user]);

  const getUser = () => {
    let preFriends: IFriend[] = [];
    user.friends.forEach((friendId) => {
      axios.get(url + friendId).then((response) => {
        let dataFriend = response.data;
        preFriends.push({
          _id: dataFriend._id,
          name: dataFriend.name,
          list: dataFriend.list,
        });
        setFriendsId(preFriends);
      });
    });
  };

  const addFriend = () => {
    //проверка на добавление самого себя в друзья
    if (friendInp.value != user.teg) {
      try {
        axios.get(url_friend_teg + friendInp.value).then((response) => {
          let dataFriend = response.data[0];
          //проверка не добавлялся ли друг ранее
          if (!user.friends.includes(dataFriend._id)) {
            let newListFriend: string[] = [...user.friends];
            newListFriend.push(dataFriend._id);
            updateFriends(newListFriend);
          }
        });
      } catch (e) {
        console.log(e);
      }
    }
  };

  const deletFriend = (idFriend) => {
    user.friends.forEach((friend, index) => {
      if (idFriend == friend) {
        let newListFriend: string[] = [...user.friends];
        newListFriend.splice(index, 1);
        updateFriends(newListFriend);
      }
    });
  };

  const updateFriends = (newFriend: string[]) => {
    try {
      axios
        .put(url + user._id, {
          case: user.list,
          friend: newFriend,
        })
        .then((response) => {
          addUser(response.data);
        });
    } catch (e) {
      console.log(e);
    }
  };

  const FriendsComponent = friendsId.map((element, index) => (
    <div key={index}>
      <Friend
        key={index}
        name={element.name}
        list={element.list}
        code={index}
        _id={element._id}
        cbDeletFriend={deletFriend}
      />
      <br />
    </div>
  ));

  return (
    <MainLayouts>
      <Grid container justifyContent={"center"}>
        <Card style={{ width: 900 }}>
          <Box p={3}>
            <Grid>
              <h1>Друзья</h1>
              <TextField
                {...friendInp}
                style={{ marginTop: 10 }}
                label={"Логин"}
              />
              <Button onClick={addFriend}>Добавить друга</Button>
              {FriendsComponent}
            </Grid>
          </Box>
        </Card>
      </Grid>
    </MainLayouts>
  );
};
export default Index;
