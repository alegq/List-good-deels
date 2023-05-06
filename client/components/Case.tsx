import React from 'react';
import {Button, Card, IconButton} from "@mui/material";
import {useTypedSelector} from "@/hooks/useTypedSelector";
import {useActions} from "@/hooks/useActions";
import styles from "../styles/Case.module.scss"
import {Delete} from "@mui/icons-material";


type Props = {
    text: string;
    code: number;
    cbDeletCase(code:number): void;
};

const Case:  React.FC<Props>= (props) => {

    const  {text, done} = useTypedSelector(state => state.list);
    const {addCase,deleteCase,checkCase,addUser} = useActions()

    const deleted = () => {
        props.cbDeletCase(props.code)
    }

    return (
        <Card className={styles.case}>
            {props.code}.
            {props.text}
            <IconButton style={{marginLeft: 'auto'}} onClick={deleted}>
                <Delete/>
            </IconButton>
        </Card>
    );
};

export default Case;