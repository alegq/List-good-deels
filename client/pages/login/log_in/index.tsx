//страница авторизации Login
import React from 'react';
import MainLayouts from "@/layouts/MainLayouts";
import LogInForm from "@/components/log_sing/log_in_form";
import {NextThunkDispatch, wrapper} from "@/store";
import {fetchUser} from "@/store/actions-creators/user";

const Index = () => {
    return (
        <MainLayouts>
            <div>
                    <LogInForm/>
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
