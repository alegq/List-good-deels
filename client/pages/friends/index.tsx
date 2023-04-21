import React from 'react';
import MainLayouts from "@/layouts/MainLayouts";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {NextThunkDispatch, wrapper} from "../../store";
import {fetchTracks} from "../../store/actions-creators/user";

const Index = () => {
    const {user, error} = useTypedSelector(state => state.user)

    console.log(user)

    if(error){
        return <MainLayouts>
            <h1>{error}</h1>
        </MainLayouts>
    }

    return (
        <MainLayouts>
            Друзья
        </MainLayouts>

    );
};

export default Index;
// @ts-ignore
export const getServerSideProps = wrapper.getServerSideProps(async (store) => {
    const dispatch = store.dispatch as NextThunkDispatch
    await dispatch(await fetchTracks())
})

