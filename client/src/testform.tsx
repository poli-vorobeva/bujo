import {reg, auth} from './slice';
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
            if(data.status==='ok'){
                dispatch(reg({name: data.name, password:data.password}));
            }else{
                dispatch(reg({name:'false', password:'false'}));
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
