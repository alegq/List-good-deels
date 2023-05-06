import React, {useEffect} from 'react';
import MainLayouts from "@/layouts/MainLayouts";
import LogInForm from "@/components/log_sing/log_in_form";
import SignUpForm from "@/components/log_sing/sing_up_form";
import {NextThunkDispatch, wrapper} from "@/store";
import {fetchUser} from "@/store/actions-creators/user";

const Index = (mode) => {

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
    store => async (data ) =>
    {
        const dispatch = store.dispatch as NextThunkDispatch;
        await dispatch(fetchUser());

        return { props: {} }
    }
);
