import React, {useState} from 'react';
import {Button, Card, Grid, IconButton} from "@mui/material";
import {useTypedSelector} from "@/hooks/useTypedSelector";
import {useActions} from "@/hooks/useActions";
import Case from "@/components/Case";
import styles from "@/styles/Case.module.scss";
import {Delete} from "@mui/icons-material";


type Props = {
    _id : string
    name: string;
    list: string[];
    code: number;
    cbDeletFriend(code:number): void;
};

const Friend:  React.FC<Props>= (props) => {

    const [showList, setShowList] = useState(false);
    const [buttonText, setButtonText] = useState('показать список');

    const deleted = () => {
        props.cbDeletFriend(props._id)
    }

    const changeStateList = () => {
        setShowList(!showList)
        setButtonText( showList? 'показать список' : 'скрыть список')

    }

    const ListComponent = props.list.map((element, index)=>
        <div key={index}>
            <span >{index+1}. {element}</span>
        </div>

    )

    return (
    <Card className={styles.case}>
        <Grid>
            {props.name}
            {
                (showList)&&
                <Card>{ListComponent}</Card>
            }

        </Grid>
        <Button onClick={changeStateList}>{buttonText}</Button>
        <IconButton style={{marginLeft: 'auto'}} onClick={deleted}>
            <Delete/>
        </IconButton>
    </Card>
    );
};

export default Friend;