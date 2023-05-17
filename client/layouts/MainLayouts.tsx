//обертка для всех страниц
import React from 'react';
import Navbar from "@/components/Navbar";
import {Container} from "@mui/material";
import styles from "../styles/MainLayouts.module.scss";

const MainLayouts = (props:any) => {
    return (
        <>
          <div>
            <Navbar/>
            <Container className={styles.mainLay} style={{margin: '10% 20%'}}>
              {props.children}
            </Container>

          </div>

        </>
    );
};

export default MainLayouts;