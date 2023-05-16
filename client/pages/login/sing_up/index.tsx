//страница регистрации Sing_Up
import React from 'react';
import MainLayouts from "@/layouts/MainLayouts";
import SignUpForm from "@/components/log_sing/sing_up_form";
import {NextThunkDispatch, wrapper} from "@/store";
import {fetchUser} from "@/store/actions-creators/user";

const Index = () => {

    return (
        <MainLayouts>
            <div>
                <SignUpForm/>
            </div>
        </MainLayouts>

    );
};

export default Index;

export const getServerSideProps = wrapper.getServerSideProps(
    store => async () =>
    {
        const dispatch = store.dispatch as NextThunkDispatch;
        await dispatch(fetchUser());

        return { props: {} }
    }
);

