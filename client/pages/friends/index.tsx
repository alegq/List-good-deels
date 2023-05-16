// страница списка друзей
import React, {useEffect, useState} from 'react';
import MainLayouts from "@/layouts/MainLayouts";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {NextThunkDispatch, wrapper} from "../../store";
import {addUser, fetchUser} from "../../store/actions-creators/user";
import {useActions} from "@/hooks/useActions";
import axios from "axios";
import Friend from "@/components/Friend";
import {useInput} from "@/hooks/useInput";
import {Box, Button, Card, Grid, TextField} from "@mui/material";

interface IFriend {
    _id : string
    name: string,
    list: string[]
}

const Index = () => {
    const {user, allUsers} = useTypedSelector(state => state.user)

    const [friendsId, setFriendsId] = useState<IFriend[]>([]);
    const {addUser} = useActions()

    const friendInp = useInput('')

    const url_id = 'http://localhost:3000/client/' + user._id;

    useEffect(
        ()=>{
               getUser()
        },
        [user]
    );


    const getUser =  () => {
          let preFriends : IFriend[] = [];
          user.friends.forEach((friendId)=>{
              allUsers.forEach((user)=>{
                if (friendId == user._id) {
                    preFriends.push({_id:user._id, name:user.name, list:user.list})
                }
                  setFriendsId(preFriends)
            })

        })
    }

    const addFriend = () => {
            allUsers.forEach((userFE,index)=>{
                if (friendInp.value == userFE.teg) {
                    console.log(userFE._id)
                    let newListFriend: string[] = [...user.friends];
                    newListFriend.push(userFE._id);
                    updateFriends(newListFriend)
                }
            })
    }

    const deletFriend = (idFriend) => {
        console.log(idFriend)
        user.friends.forEach((friend,index)=>{
            if (idFriend == friend) {
                console.log(friend)
                let newListFriend: string[] = [...user.friends];
                newListFriend.splice(index,1);
                updateFriends(newListFriend)
            }
        })
    }



    const updateFriends = (newFriend:string[]) => {
        try {
            axios.put(url_id,{
                    "case":user.list,
                    //"friend": [...user.friends,newFriend]
                    "friend": newFriend
                }
            ).then(response => {addUser(response.data)});
        }catch (e){
            console.log(e)
        }
    }

    const FriendsComponent = friendsId.map((element, index)=>
        <div key={index}>
            <Friend key={index} name={element.name}
                    list={element.list} code={index}
                    _id={element._id} cbDeletFriend={deletFriend}
            />
            <br/>
        </div>

    )

    return (
    <MainLayouts>
        <Grid container justifyContent={'center'}>
            <Card style={{width:900}}>
                <Box p={3}>
                    <Grid>
                        <h1>Друзья</h1>
                        <TextField
                            {...friendInp}
                            style={{marginTop: 10}}
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

export const getServerSideProps = wrapper.getServerSideProps(
    store => async ( ) =>
    {
        const dispatch = store.dispatch as NextThunkDispatch;
        await dispatch(fetchUser());

        return { props: {} }
    }
);



