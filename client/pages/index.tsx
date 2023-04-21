import React from 'react';
import {Button} from "@mui/material";
import Navbar from "@/components/Navbar";
import MainLayouts from "@/layouts/MainLayouts";
import LogSingForm from "@/components/log_sing";

const Index = () => {
    return (
        <>
            <MainLayouts>
                <div className={"center"}>
                    <h1>Добро пожаловать!</h1>
                    <h3>Здесь можно создать список добрых дел</h3>
                    <LogSingForm/>

                    <Button>dsfdsf</Button>

                </div>
            </MainLayouts>


            <style jsx>
                {`
                    .center {
                    margin-top: 150px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;} 
                `}

            </style>
        </>

    );
};

export default Index;