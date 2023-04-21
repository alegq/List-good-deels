import React, {useState} from 'react';

// interface LogSingForm {
//     log: string;
//     passWord: string;
// }

const LogSingForm = (props:any) => {

    const [log, setLog] = useState('');
    const [passWord, setPassWord] = useState('');

    function add(){
        console.log(log + passWord);
    }

    function logChange(EO:any){
        setLog(EO.target.value);
    }
    function PassWordChange(EO:any){
        setPassWord(EO.target.value);
    }
    return (
        <div>
            <form onSubmit={add}>
                Login
                <br/>
                <input type="text" onChange={logChange}/>
                <br/>
                Password
                <br/>
                <input type="text"  onChange={PassWordChange}/>
                <br/>
                <input type="submit"/>
            </form>

        </div>
    );
};

export default LogSingForm;