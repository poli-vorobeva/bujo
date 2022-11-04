import {reg, auth} from './actions';
import { useSelector, useDispatch } from "react-redux";
import {IUser} from './reducer';
import React, { useState } from 'react';
import {  Link } from "react-router-dom";
import {requestAuth} from './request/requestAuth';

const TestForm = () => {

    const nameStore = useSelector((state:IUser) => state.user.name);
    const passwordStore =  useSelector((state:IUser) => state.user.password);
    const dispatch = useDispatch();
    const [name, changeName]=useState('');
    const [password, changePassword] = useState('');

    const onSunmit = ()=>{
        changeName('');
        changePassword('');
        requestAuth(name, password).then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.status==='ok'){
                console.log(1)
                dispatch(reg(data.name, data.password));
            }else{
                console.log(2)
                dispatch(reg('false', 'false'));
            }
        })
    }
    
    return (
        <div>
            <p>{nameStore}</p>
            <p>{passwordStore}</p>
            <input onChange={(e)=>changeName(e.target.value)} type="text" value={name} required/><br/>
            <input onChange={(e)=>changePassword(e.target.value)} type="text" value={password} required/><br/>
            <button onClick={onSunmit}>Reg</button>
            <p></p>
        </div>
    )
}

export default TestForm;