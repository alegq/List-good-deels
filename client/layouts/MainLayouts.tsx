import React from 'react';
import Navbar from "@/components/Navbar";
import {Container} from "@mui/material";


const MainLayouts = (props:any) => {
    return (
        <>
            <Navbar/>
            <Container style={{margin: '10% 20%'}}>
            {props.children}
            </Container>

        </>
    );
};

export default MainLayouts;