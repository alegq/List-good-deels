import React, {useState} from 'react';
import {useTypedSelector} from "@/hooks/useTypedSelector";
import {useActions} from "@/hooks/useActions";
import {Button} from "@mui/material";
import {number, string} from "prop-types";
import Case from "@/components/Case";
import MainLayouts from "@/layouts/MainLayouts";

const ListGoodDeels = () => {
    const [inputText, setInputText] = useState('');

    const  {text, done} = useTypedSelector(state => state.list);
    const {addCase,deleteCase} = useActions()


    // function inputChange(EO:object){
    //     setLog(EO.target.value);
    // }

    const addCases = () => {
      addCase(inputText);
        setInputText('');
    }

    const ListComponent:any = text.map((element, index)=>
        <Case key={index} text={element} code={index+1}/>
    )

    return (
        <div>
            <input type="text" value={inputText} onChange={(EO)=>{setInputText(EO.target.value)}}/>
            <Button onClick={addCases}>Добавить</Button>
            {/*<Button onClick={addCases}>Удалить</Button>*/}
            <div>
                {ListComponent}
            </div>



        </div>
    );
};

export default ListGoodDeels;

