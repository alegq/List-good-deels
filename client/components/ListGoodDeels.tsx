//компанент для отображения всего списка хороших дел
import React, { useState } from "react";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { useActions } from "@/hooks/useActions";
import { Box, Button, Grid } from "@mui/material";
import Case from "@/components/Case";
import axios from "axios";

const ListGoodDeels = () => {
  const [inputText, setInputText] = useState("");

  const { user } = useTypedSelector((state) => state.user);
  const { addUser } = useActions();

  const url_id = "http://localhost:3000/client/" + user._id;

  const updateList = (newlist?: string[]) => {
    try {
      axios
        .put(url_id, {
          case: newlist,
          friend: user.friends,
        })
        .then((response) => {
          addUser(response.data);
        });
    } catch (e) {
      console.log(e);
    }
  };

  const addCase = () => {
    if (inputText !== "") {
      let newList: string[] = [...user.list];
      newList.push(inputText);
      updateList(newList);
      setInputText("");
    }
  };

  const deleteCase = (code: number) => {
    console.log(code);
    let newList: string[] = [...user.list];
    newList.splice(code - 1, 1);
    updateList(newList);
  };

  const ListComponent: any = user.list.map((element, index) => (
    <Case
      key={index}
      text={element}
      code={index + 1}
      cbDeletCase={deleteCase}
    />
  ));

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={(EO) => {
          setInputText(EO.target.value);
        }}
      />
      <Button onClick={addCase}>Добавить</Button>
      <Grid container direction={"column"}>
        <Box p={2}>{ListComponent}</Box>
      </Grid>
    </div>
  );
};

export default ListGoodDeels;
